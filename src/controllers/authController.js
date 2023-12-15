
const admin = require('firebase-admin'); 

const auth = admin.auth();


const register = async (req, res, next) => {
  try {
    const user = await auth.createUser({
      email: req.body.email,
      password: req.body.password
    })
    return res.json({uid: user.uid})

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
    const user = await auth.getUserByEmail(req.body.email);
    await auth.signInWhithPassword(user, req.body.password);

    return res.json({uid: user.uid})

  } catch (error) {
    console.error(error);

    let errorMessage = 'Credenciales inválidas';
    if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
      errorMessage = 'Correo electrónico o contraseña incorrectos';
    }

    return res.status(401).json({ mensaje: errorMessage });
  }
};



const loginGoogle = async (req, res) => {

  try {
    const user = await auth.signInWithPopup(auth.GoogleAuthProvider());
    
    const uid = user.uid;
    return res.json({uid});

  } catch (error) {
    return handleError(res, error);
  }

} 

const resetPassword = async (req, res) => {
  
  try {
    await auth.sendPasswordResetEmail(req.body.email);
    return res.json({mensaje: 'Email reset enviado'});

  } catch (error) {
    return handleError(res, error);
  }  
}

module.exports = {
  register,
  login,
  loginGoogle,
  resetPassword
};
