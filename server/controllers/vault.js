const Vault = require('../models/Vault')

exports.loadVaults = (req, res, next) => {
  Vault.find()
  .then(vault => res.status(200).json(vault))
}

exports.createNewVault = (req, res, next) => {
  const vault = new Vault({
    ...req.body
  });
  
  vault.save()
  .then(() => res.status(201).json({Message: 'Vault created'}))
  .catch(error => res.status(400).json({error}))
}