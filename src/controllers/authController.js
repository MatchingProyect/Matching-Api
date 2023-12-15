<<<<<<< HEAD
const { getAuth } = require('firebase-admin/auth'); 
const auth = getAuth();
const admin = require('../config/firebase');

const register = async (req, res, next) => {

  try {

    if(!req.body.email) {
      throw new Error('Email requerido');
    }

    if(!req.body.password) {
      throw new Error('Password requerido');
    }

    const user = await auth.createUser({
        email: req.body.email,
        password: req.body.password
    });
    
    return res.json(user);

  } catch (error) {

    console.log(error);
    return res.status(500).json({ mensaje: 'Error al registrar usuario'});
  
  }

};

const login = async (req, res, next) => {
  
  try {

    if(!req.body.email) {
      throw new Error('Credenciales inválidas');
    }

    if(!req.body.password) {
      throw new Error('Credenciales inválidas');
    }

    const user = await auth.signInWithEmailAndPassword(
       req.body.email,
       req.body.password
    );

    return res.json(user);

  } catch (error) {
    console.log(error);
    return res.status(401).json({ mensaje: 'Credenciales inválidas' });
  }

};

module.exports = {
  register, 
  login
};
=======
const { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } = require('firebase-admin/auth');
const auth = getAuth();


const register = async (req, res, next) => {
  try {
    if (!req.body.email || !req.body.password) {
      throw new Error('Email y contraseña son requeridos');
    }

    const userCredential = await createUserWithEmailAndPassword(auth, req.body.email, req.body.password);
    const uid = userCredential.user.uid;

    // Devuelve solo el UID del usuario
    return res.json({ uid });

  } catch (error) {
    console.error(error);

    let errorMessage = 'Error al registrar usuario';
    if (error.code === 'auth/email-already-in-use') {
      errorMessage = 'El correo electrónico ya está en uso';
    }

    return res.status(500).json({ mensaje: errorMessage });
  }
};

const login = async (req, res, next) => {
  try {
    if (!req.body.email || !req.body.password) {
      throw new Error('Credenciales inválidas');
    }

    const userCredential = await signInWithEmailAndPassword(auth, req.body.email, req.body.password);
    const uid = userCredential.user.uid;

    // Devuelve solo el UID del usuario
    return res.json({ uid });

  } catch (error) {
    console.error(error);

    let errorMessage = 'Credenciales inválidas';
    if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
      errorMessage = 'Correo electrónico o contraseña incorrectos';
    }

    return res.status(401).json({ mensaje: errorMessage });
  }
};

module.exports = {
  register,
  login
};
>>>>>>> 0adea7635286ed86d57a480c03866e06ebd994fe
