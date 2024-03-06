const User = require("../models/user-model");
const  bcrypt = require('bcryptjs');


// *-------------------------
 // Home Page Logic
 // *-------------------------
 const home = async (req, res)=>{
    try{
        res.status(200).send('Welcome to in router world.');

    }catch (error){
        console.log(error);
    }
 };


 // *-------------------------
 // Registration Page Logic
 // *-------------------------

// 1. Get Registration Data: Retrieve user data (username, email, phone, password).
// 2. Check Email Existence: Check if the email is already registered.
// 3. Hash Password: Securely hash the password.
// 4. Create User: Create a new useer with hashed password.
// 5. Save to DB: Save user data to the database.
// 6. Respond: Respond with "Registration Successful" or handle errors.

 
 const register = async (req, res, next)=>{
    try{
        // console.log(req.body);
        const {username, email, phone, password} = req.body;

        const userExist = await User.findOne({email});
        if(userExist){
            return res.status(400).json({msg:"email already exists"});
        }

      
      

        const userCreated = await User.create({
            username, 
            email, 
            phone, 
            password
        });

        res.status(201).json({
            // msg:userCreated, 
            msg: "registration successful",
            token: await userCreated.generateToken(),
            userId: userCreated._id.toString(),
        });

    }catch (error){
        // res.status(500).json('internal server error');
        next(error);
    }
 };




  // *-------------------------
 // User login Page Logic
 // *-------------------------

const login = async (req, res) => {
    try {
        const {email, password} = req.body;  
        
        const userExist = await User.findOne({ email });
        console.log(userExist);

        if(!userExist){
            return res.status(400).json({message: "Invalid Credentials"});
        }

        // const user = await bcrypt.compare(password, userExist.password);
        const user = await userExist.comparePassword(password);

        if(user){
            res.status(200).json({
                // msg:userCreated, 
                msg: "Login successful",
                token: await userExist.generateToken(),
                userId: userExist._id.toString(),
            });                       
        }else{
            res.status(401).json({message:"Invalid email or password"});
        }

    } catch (error) {
        res.status(500).json('internal server error');        
    }
}



// *-------------------
// to send user data -User Logic
// *-------------------

const user = async (req, res) => {
    try {
        //? const userData = await User.find({})      ;
        const userData = req.user;
        console.log(userData);
        return res.status(200).json({msg: userData});
    } catch (error) {
        console.log(`error from user route ${error}`);        
    }
};





 module.exports = { home, register, login, user}














// *_______________________

// ? In an Express.js application, a "controller" refers to a part of your code that is responsible for handling the application's logic. Controllers are typically used to process incoming rquests, interact with models (data sources), and send responses back to clients. They help organize your application by separating concerns and following the MVC (Model -View-Controller) design  


