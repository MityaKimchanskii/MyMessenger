const express = require('express')
const router = express.Router()

// const { ensureAuth, ensureGuest } = require('../middleware/auth')

const Message = require('../models/message')

// @desc    Welcome page
// @route   GET /
router.get('/', (req, res) => {
  res.render('welcome')
})

// @desc    Login page
// @route   GET /
router.get('/login', (req, res) => {
  res.render('login')
})

// @desc    Registration page
// @route   GET /registration
router.get('/registration', (req, res) => {
  res.render('registration')
})

// @desc    Login page
// @route   Post /login
router.post('/login', async (res, req) => {
    
})

// @desc    Messenger page
// @route   GET /messenger
// router.get('/messenger', ensureAuth, async (req, res) => {
router.get('/messenger', async (req, res) => {
    try {
      const messages = await Message.find({ user: req.user.id}).lean()
      res.render('messenger', {
        first: req.user.firstName,
        last: req.user.lastName,
        messages,
      })
    } catch (err) {
      console.error(err)
      res.render('error/500')
    }
})

// @desc    Settings page
// @route   GET /settings
// router.get('/settings',  ensureAuth, (req, res) => {
router.get('/settings', (req, res) => {
  res.render('settings')
})

module.exports = router