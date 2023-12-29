const { addUserInDb } = require("./addInDB");
const bcrypt = require('bcrypt');
const {auth} = require('../config/firebase');
const {admin} = require('firebase-admin');
const jwt = require('jsonwebtoken');
const { OAuth2Client } = require('google-auth-library');
const nodemailer = require('nodemailer');
import { onAuthStateChanged } from "firebase/auth";
    const pgp = require('pg-promise')();
    const db = pgp('postgresql://matching_db_wl28_user:f8XXqdrmkeMNj2jdt99wme0gYqBuWVC@dpg-clud6t0l5elc73eh0cc0-a:5432/matching_db_wl28');


const saveGoogleUserToPostgres = async (userData) => {
  try {
    const query = 'INSERT INTO usuarios (google_id, display_name, email) VALUES ($1, $2, $3)';
    await db.none(query, [userData.uid, userData.displayName, userData.email]);
    return { success: true, message: 'Usuario insertado en PostgreSQL' };
  } catch (error) {
    console.error('Error al insertar en PostgreSQL:', error);
    return { success: false, message: 'Error al insertar en PostgreSQL' };
  }
};

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'proyectmatching@gmail.com', 
    pass: '11122023developer', 
  },
});

const sendPasswordResetEmail = async (email, resetLink) => {
  const mailOptions = {
    from: 'proyectmatching@gmail.com', 
    to: email,
    subject: 'Restablecer contraseña',
    text: `Haga clic en el siguiente enlace para restablecer su contraseña: ${resetLink}`,
  };

  return transporter.sendMail(mailOptions);
};

const googleClientId = "1061662234396-o558vqrpml1bpo2rut38qufj859kgtpg.apps.googleusercontent.com"
const initializeFirebase = async () => {
  try {
    admin.initializeApp(); 
    console.log('Firebase initialized successfully');
  } catch (error) {
    console.error('Error initializing Firebase:', error);
    process.exit(1); 
  }
};

const generateAuthToken = (userId) => {
  const token = jwt.sign({ userId }, 'secreto_del_token', { expiresIn: '5h' });
  return token;
};

const register = async (req, res) => {
  try {
    const userCred = await auth.createUser({
      email: req.body.email,
      password: req.body.password,
    });

    const user = await addUserInDb(
      req.body.displayName,
      req.body.gender,
      req.body.dayBirth,
      req.body.email,
      req.body.phone,
      req.body.creditCardWarranty,
      req.body.avatarImg,
      req.body.password
    );

    return res.json({
      firebaseUid: userCred.uid,
      postgresId: user.id,
    });

  } catch (error) {
    console.log(error);
    let message = 'Error registering user';

    if (error.code === 'auth/email-already-in-use') {
      message = 'Email already in use';
    }

    res.status(500).json({ message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await auth.getUserByEmail(email);
    const isPasswordValid = bcrypt.compare(password, user.passwordHash);
    if (!isPasswordValid) {
      throw new Error('Invalid password');
    }
    const token = generateAuthToken(user.uid);

    return res.json({ token, message: 'Login successful' });

  } catch (error) {
    console.error(error);
    let message = 'Invalid credentials';

    if (error.message === 'auth/user-not-found') {
      message = 'User not found';
    } else if (error.message === 'Invalid password') {
      message = 'Invalid email or password';
    }

    return res.status(400).json({ message });
  }
};


const loginGoogle = async (req, res) => {
  try {
    const { idToken } = req.body;

    const client = new OAuth2Client(googleClientId);
    const ticket = await client.verifyIdToken({
      idToken,
      audience: googleClientId,
    });

    const payload = ticket.getPayload();
    const uid = payload['sub'];

    if (uid) {
      const result = await saveGoogleUserToPostgres({
        uid,
        displayName: payload.displayName,
        email: payload.email,
      });

      if (result.success) {
        return res.json({ success: true, message: 'Usuario creado exitosamente' });
      } else {
        return res.status(500).json({ success: false, message: 'Error al crear el usuario' });
      }
    } else {
      return res.status(400).json({ success: false, message: 'ID de usuario no válido' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: 'Error en el inicio de sesión con Google' });
  }
};

// onAuthStateChanged(async (user) => {
//   if (user) {
//     // El usuario se ha autenticado con Google
//     try {
//       // Extraer información relevante del usuario de Firebase
//       const { uid, displayName, email } = user;

//       // Crear un usuario en la base de datos PostgreSQL
//       await addUserInDb({
//         firebase_id: uid,
//         displayName: displayName,
//         email: email
//       });

//       console.log('Usuario creado en PostgreSQL');
//     } catch (error) {
//       console.error('Error al crear el usuario en PostgreSQL:', error);
//     }
//   }
// });



const resetPassword = async (req, res) => {
  try {
    const email = req.body.email;

    const user = await auth.getUserByEmail(email);

    const resetLink = await auth.generatePasswordResetLink(email);

    await sendPasswordResetEmail(email, resetLink);

    return res.json({ mensaje: 'Enlace para restablecer la contraseña enviado por correo electrónico' });
  } catch (error) {
    return handleError(res, error);
  }  
};



module.exports = {
  register,
  login,
  loginGoogle,
  resetPassword
};
