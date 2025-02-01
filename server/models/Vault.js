const mongoose = require('mongoose')

const vaultSchema = new mongoose.Schema({

  name: {type: String, required: true},
  paints: [
    {
      name: {type: String, required: false},
      brand: {type: String, required: false},
      ref: {type: String, required: false}
    }
  ]
})

module.exports = mongoose.model('Vault', vaultSchema)