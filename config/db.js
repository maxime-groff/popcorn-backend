const mongoose = require('mongoose')

const connectDB = async (credentials) => {
  const {username, password, host, dbname} = credentials
  try {
    await mongoose.connect(`mongodb+srv://${username}:${password}@${host}/${dbname}?retryWrites=true&w=majority`, {
      useNewUrlParser: true, 
      useCreateIndex: true, 
      useFindAndModify: true, 
      useUnifiedTopology: true
    })
    console.log("Database connected successfully")
  }
  catch (err) {
    console.log("Database connexion failed")
    console.log(err.message)
    process.exit(1)
  }
}

module.exports = connectDB
