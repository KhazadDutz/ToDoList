const validateUserName = (name) => {
  return !(name && name.length >= 3) ? false : true;
}

const validateUserEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return !(email && emailRegex.test(email)) ? false : true;
}

const validateUserPassword = (pwd) => {
  const pwdRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*+?~]).{8,}$/;
  return !(pwd && pwdRegex.test(pwd)) ? false : true;
}

module.exports = {
  validateUserName,
  validateUserEmail,
  validateUserPassword
}