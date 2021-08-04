require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT

// Route par défaut, message envoyé pour tester la fonctionnalité
app.get('/', (req, res) => {
   res.send("Bienvenue sur le server de l'application <b>CSHEET</b>")
})

// Démarrage du server avec message dans la console
app.listen(PORT, () => {
   console.log(`🙏 Connecté au server http://localhost:${PORT}`)
})

// const db = require('db')
// db.connect({
//    host: process.env.DB_HOST,
//    username: process.env.DB_USER,
//    password: process.env.DB_PASS
// })