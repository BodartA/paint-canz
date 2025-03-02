const express = require('express')
const app = express()
const mongoose = require('mongoose');
const Vault = require('./models/Vault')


const vaultRoutes = require('./routes/vault')
const userRoutes = require('./routes/user')

app.use(express.json())

app.use((req, res, next) => {
  const allowedOrigins = ['http://localhost:5173', 'http://localhost:3000'];
  const origin = req.headers.origin;
  
  if (origin && allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
});

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://admin:Tingasol59@cluster0.iqctw.mongodb.net/paint_canz?retryWrites=true&w=majority&appName=Cluster0');
}

app.use('/api/vault', vaultRoutes)
app.use('/api/auth', userRoutes)

// app.get('/api/vault/:id', async (req, res, next) => {

//   const { id } = req.params

//   try {

//     if (!mongoose.Types.ObjectId.isValid(id)) {
//       res.status(400).json({ message: "Invalid ID format" });
//     }

//     const vault = await Vault.findById(id)
//     if (!vault) {
//       res.status(404).json({message : "Vault not found"})
//     }
//     res.json(vault)
//   } catch (error) {
    
//     res.status(500).json({error})
//   }
// });

module.exports = app