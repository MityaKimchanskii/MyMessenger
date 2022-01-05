
const express = require('express')
const app = express()
// app.use(app.router);
// app.get('/' ...);
// app.post(...);
// routes.initialize(app);
app.use(express.urlencoded({ extended: false}))
const bcrypt = require('bcrypt')
const regUsers = []

// @desc    Registration page
// @route   Post /registration
module.exports = {
  getNewUser: ('/api/newRegisterUser', async (res, req) => {
      try {
        const hashPassword = await bcrypt.hash(req.body.password, 10)
        users.push({
          // id: Date.now().toString(),
          email: req.body.email,
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          password: hashPassword,
        })
        res.redirect('/login')
      } catch {
        res.redirect('/register')
      }
      console.log(users)
  })
}

