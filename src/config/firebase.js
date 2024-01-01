const admin = require('firebase-admin');
const serviceAccount = require('../../firebase.json');


const {FIREBASE_TYPE,FIREBASE_PROJECT_ID,FIREBASE_PRIVATE_KEY_ID, FIREBASE_PRIVATE_KEY, FIREBASE_CLIENT_EMAIL, FIREBASE_CLIENT_ID, FIREBASE_AUTH_URI, FIREBASE_TOKEN_URI, FIREBASE_AUTH_PROVIDER_X509_CERT_URL, FIREBASE_CLIENT_X509_CERT_URL, FIREBASE_UNIVERSE_DOMAIN} = process.env;

const firebaseConfig = {
  type: FIREBASE_TYPE,
  project_id: FIREBASE_PROJECT_ID,
  private_key_id: FIREBASE_PRIVATE_KEY_ID,
  private_key: FIREBASE_PRIVATE_KEY,
  client_email: FIREBASE_CLIENT_EMAIL,
  client_id: FIREBASE_CLIENT_ID,
  auth_uri: FIREBASE_AUTH_URI,
  token_uri: FIREBASE_TOKEN_URI,
  auth_provider_x509_cert_url: FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
  client_x509_cert_url: FIREBASE_CLIENT_X509_CERT_URL,
  universe_domain: FIREBASE_UNIVERSE_DOMAIN
};


const initializeFirebase = () => {

  console.log(firebaseConfig)
  console.log(serviceAccount)

  const appName = 'matching';
  try {
    const app = admin.initializeApp({
      credential: admin.credential.cert(firebaseConfig),
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