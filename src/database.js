const mongoose = require('mongoose')
const {DBUSER,DBPASSWORD,DBNAME} = process.env

const MONGODB_URI = `mongodb+srv://${DBUSER}:${DBPASSWORD}@inicio.vwjmgsk.mongodb.net/${DBNAME}`

connection = async()=>{
    try {
         await mongoose.connect(MONGODB_URI,{
            useUnifiedTopology:true,
            useNewUrlParser:true
        })
        console.log("Database is connected")
    } catch (error) {
        console.log(error);
    }
}

module.exports = connection
