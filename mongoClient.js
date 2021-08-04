require('dotenv').config()
const DB_NAME = process.env.DB_NAME
const USERNAME = process.env.DB_USERNAME
const PASSWORD = process.env.PASSWORD
const CLUSTER_NAME = process.env.CLUSTER_NAME

const mongoose = require('mongoose')

console.log(`USERNAME : ${USERNAME}`);

const URI = `mongodb+srv://${USERNAME}:${PASSWORD}@${CLUSTER_NAME}.aylec.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`

const MongoDbClient = {
   initialize: () => {
      try {
         const client = mongoose.connect(URI,
            {
               useNewUrlParser: true,
               useUnifiedTopology: true
            })
         client.then(() => console.log(`Connecté à la base de donnée ${DB_NAME} avec succès ✔️`))
      } catch (e) {
         throw Error(e)
      }
   }
}

module.exports = MongoDbClient