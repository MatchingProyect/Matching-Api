const admin = require('firebase-admin');
const serviceAccount = require('../../firebase.json');

const initializeFirebase = () => {
  const appName = 'matching';
  try {
    const app = admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    }, appName);
    console.log('Firebase initialized successfully');
    return app;
  } catch (error) {
    console.error('Error initializing Firebase:', error);
    process.exit(1); // Termina la aplicación en caso de error
  }
};

const appInstance = initializeFirebase();
const firestore = appInstance.firestore();
const auth = appInstance.auth();

module.exports = {
  appInstance,
  firestore,
  auth,
};