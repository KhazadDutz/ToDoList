const validateUser = (user) => {
  if (!user.name || !user.email || !user.password) return false;
  return true;
}

module.exports = {
  validateUser
}