require('dotenv').config()
const PORT = process.env.PORT

const express = require('express')
const app = express()
const cors = require('cors')
const mongoDBClient = require('./mongoClient')

app.use(cors())

// Route par défaut, message envoyé pour tester la fonctionnalité
app.get('/', (req, res) => {
   res.send("Bienvenue sur le server de l'application <b>CSHEET</b>")
})

// Démarrage du server avec message dans la console
app.listen(PORT, () => {
   console.log(`🙏 Connecté au server http://localhost:${PORT}`)
   mongoDBClient.initialize()
})

