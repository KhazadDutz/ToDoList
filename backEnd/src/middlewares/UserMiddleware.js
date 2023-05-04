const { validateUserPassword, validateUserEmail, validateUserName } = require('../helpers/UserHelpers')

const validateUserInput = (req, res, next) => {
  const { name, email, password } = req.body;
  return !(validateUserName(name), validateUserEmail(email), validateUserPassword(password)) ? res.status(400).json({error: 'Invalid User input'}) : next();

}

module.exports = {
  validateUserInput
}