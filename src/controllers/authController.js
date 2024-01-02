const { addUserInDb } = require("./addInDB");
const bcrypt = require('bcrypt');
const {auth} = require('../config/firebase');
const {admin} = require('firebase-admin');
const jwt = require('jsonwebtoken');
const { OAuth2Client } = require('google-auth-library');

const nodemailer = require('nodemailer');


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
      req.body.name,
      req.body.lastName,
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


    return res.json({ uid, message: 'Google login successful' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error en el inicio de sesión con Google' });
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
  resetPassword
};
