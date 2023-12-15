const { check } = require('express-validator'); 

const loginValidators = [
  check('email').isEmail(),
  check('password').isLength({ min: 6 }) 
];

module.exports = {
  loginValidators
};
