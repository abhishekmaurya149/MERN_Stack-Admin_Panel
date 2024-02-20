const mongooge = require('mongoose');

// const URL = 'mongodb://127.0.0.1:27017/mern_admin';

const URL = process.env.DATABASE_URI;
const connectDB = async () => {
    try{
        await mongooge.connect(URL);
        console.log("DB connection successfull");
    }catch (error){
        console.error("DB connection failed");
        process.exit(0);
    }
}


module.exports = connectDB;