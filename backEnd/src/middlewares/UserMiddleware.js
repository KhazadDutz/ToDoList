const { validateUserPassword, validateUserEmail, validateUserName } = require('../helpers/UserHelpers')

const validateUserInput = (req, res, next) => {
  const { name, email, password } = req.body;

  console.log((validateUserName(name) && validateUserEmail(email) && validateUserPassword(password)), 'O QUE ME RETORNA?')


  return (validateUserName(name) && validateUserEmail(email) && validateUserPassword(password)) ? next() : res.status(400).json({error: 'Invalid User input'});
}

module.exports = {
  validateUserInput
}