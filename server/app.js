const express = require('express')
const app = express()
const mongoose = require('mongoose');
const Vault = require('./models/Vault')

app.use(express.json())

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://admin:Tingasol59@cluster0.iqctw.mongodb.net/paint_canz?retryWrites=true&w=majority&appName=Cluster0');
}

app.post('/api/vault', (req, res, next) => {

  const vault = new Vault({
    ...req.body
  });
  

  vault.save()
  .then(() => res.status(201).json({Message: 'Vault created'}))
  .catch(error => res.status(400).json({error}))
})

app.get('/api/vault', (req, res, next) => {

  Vault.find()
  .then(vault => res.status(200).json(vault))
});

module.exports = app