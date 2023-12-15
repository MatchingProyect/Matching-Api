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
