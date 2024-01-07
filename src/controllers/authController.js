const { addUserInDb } = require("./addInDB");
const dataBase = require('../dataBase/dataBase')
const bcrypt = require('bcrypt');
const {  appInstance, auth, firebaseApp} = require('../config/firebase');
const admin = require('firebase-admin');
const jwt = require('jsonwebtoken');
const { OAuth2Client } = require('google-auth-library');
const nodemailer = require('nodemailer');
const {User,  FriendRequest, UserFriends} = dataBase.models
const pgp = require('pg-promise')();
const { getAuth, signInWithEmailAndPassword } = require("firebase/auth");
const { Users } = dataBase.models

require('dotenv').config();
    const db = pgp({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  
});



const useAuthentication = () => {
  // Lógica de autenticación
  const isAuthenticated = !!auth.currentUser; 
  const user = isAuthenticated ? auth.currentUser : null; 

  return isAuthenticated ? user : null;
};





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
  }
};


const register = async (req, res) => {
  try {
    console.log(req.body)
    const user = {
      email: req.body.email,
      password: req.body.password,
      displayName: req.body.displayName || req.body.nombreApellido,
    }
    console.log("user", user)

    const response = await addUserInDb(user);
    console.log("response", response)

    if(req.body.password){
      const userCred = await auth.createUser({
        email: req.body.email,
        password: req.body.password,
      });
      res.status(200).json({ response });
    }
    else {
      console.log("registrado con exito")
      res.status(200).json({ response });
    }


  } catch (error) {
    console.log(error);
    let message = 'Error registering user';

    if (error.code === 'auth/email-already-in-use') {
      message = 'Email already in use';
    }

    res.status(500).json({ message });
  }
};

const logout = async (req, res) => {
  try {
    // Realizar el signOut
    await auth.signOut();

    // Limpiar el localStorage
    localStorage.removeItem('userData');

    // Enviar la respuesta al cliente
    res.status(200).json({ message: 'Logout successful' });
  } catch (error) {
    console.error('Error during logout:', error);
    res.status(500).json({ error: 'Error during logout' });
  }
};

// const login = async (req, res) => {
//   try {
//     const { emailValue, password } = req.body;

//     const auth = getAuth(firebaseApp);


//     signInWithEmailAndPassword(auth, emailValue, password)
//       .then((userCredential) => {
//         // Signed in
//         console.log(userCredential.user);
//         // ...
//       })
//       .catch((err) => {
//         if (
//         err.code === AuthErrorCodes.INVALID_PASSWORD ||
//         err.code === AuthErrorCodes.USER_DELETED
//       ) {
//         setError("The email address or password is incorrect");
//       } else {
//         console.log(err.code);
//         alert(err.code);
//       }
//       });
    
    
//   } catch (error) {
//     console.error(error);
//     let message = 'Invalid credentials';

//     if (error.message === 'auth/user-not-found') {
//       message = 'User not found';
//     } else if (error.message === 'Invalid password') {
//       message = 'Invalid email or password';
//     }

//     return res.status(400).json({ message });
//   }
// };\




const login = async (req, res) => {
  try {
    const { emailValue, password } = req.body;

    // Buscar al usuario por correo electrónico
    const userFound = await User.findOne({ where: { email: emailValue } });

    const userObject = userFound.dataValues
    console.log(userObject.email == emailValue && userObject.password == password)

    if(userObject.email == emailValue && userObject.password == password ) {
      console.log("true user")
      return res.status(200).json(userObject);
    }

  } catch (error) {
    // Manejar cualquier error y devolver una respuesta de error al cliente
    console.error(error);
    return res.status(500).json({ error: 'Error en el servidor' });
  }
};

const loginGoogle = async (req, res) => {
  try {
    const { idToken } = req.body;

    // Verificar el token de Google usando googleClientId
    const client = new OAuth2Client(googleClientId);
    const ticket = await client.verifyIdToken({
      idToken,
      audience: googleClientId,
    });

    const payload = ticket.getPayload();
    const uid = payload['sub'];
    const displayName = payload['name'];
    const email = payload['email'];

    if (uid && displayName && email) {
      // Guardar la información del usuario en la base de datos PostgreSQL
      const result = await saveGoogleUserToPostgres({ uid, displayName, email });

      if (result.success) {
        const user = await addUserInDb(displayName, email);
        return res.json({ success: true, message: 'Usuario creado exitosamente', user});
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
  resetPassword,
  logout
};
