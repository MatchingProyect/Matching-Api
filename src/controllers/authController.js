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