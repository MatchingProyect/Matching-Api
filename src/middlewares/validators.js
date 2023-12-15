const { check } = require('express-validator'); 

const loginValidators = [
  check('email').isEmail(),
  check('password').isLength({ min: 6 }) 
<<<<<<< HEAD
]

module.exports = {
  loginValidators
}
=======
];

module.exports = {
  loginValidators
};
>>>>>>> 0adea7635286ed86d57a480c03866e06ebd994fe
