const User = require('../models/User')
const argon2 = require('argon2')

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

}