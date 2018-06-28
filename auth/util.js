function isAuthenticUser(email, password) {
  const user = {
    email: 'test@example.com',
    password: '123456'
  }
  if(email === user.email && password === user.password){
    return true
  }
  return false
}

module.exports = {isAuthenticUser}

