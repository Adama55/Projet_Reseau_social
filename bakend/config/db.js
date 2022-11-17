const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://" + process.env.DB_USER_PASS + "@atlascluster.q4jzdlf.mongodb.net/test",
  { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    }
)
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));