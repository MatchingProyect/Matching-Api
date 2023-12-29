const admin = require('firebase-admin');
const bcrypt = require('bcrypt');

const serviceAccount = require('../../firebase.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const auth = admin.auth(); 

module.exports = {
  admin,
  auth,
};
