const User = require('../models/User')
const argon2 = require('argon2')
const jwt = require('jsonwebtoken')

require('dotenv').config()

exports.signup = async (req, res, next) => {

  try {

    if (!req.body.email || !req.body.name || !req.body.password) {
      return res.status(400).json({message: "Information(s) missing"})
    }

    const checkUser = await User.findOne({email: req.body.email})
    if (checkUser) {
      return res.status(400).json({ message : "This user already exist"})
    }

    const hash = await argon2.hash(req.body.password)

    const user = new User({
      email: req.body.email,
      name: req.body.name,
      password: hash
    })
    await user.save()

    res.status(201).json({message : "User created"})

  } catch (error) {
    res.status(500).json({error})
  }
}

exports.login = async (req, res, next) => {

  try {
    
    const user = await User.findOne({email: req.body.email})

    if (!user) {
      return res.status(401).json({message: "Wrong email or password"})
    }

    const isValid = await argon2.verify(user.password, req.body.password)

    if (!isValid) {
      return res.status(401).json({message: "Wrong email or password"})
    }

    const token = jwt.sign(
      {userId: user._id},
      process.env.JWT_SECRET || "RANDOM_TOKEN_SECRET",
      {expiresIn: '24h'}
    )

    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 24 * 60 * 60 * 1000
    })

    res.status(200).json({userId: user._id, message: "Authenticated"})
  } catch (error) {
    
    res.status(500).json({error})
  }
}