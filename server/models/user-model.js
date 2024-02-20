const mongoose = require("mongoose");
const  bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    phone:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    },
    isAdmin:{
        type:Boolean,
        require:false,
    },        
});

  // hash the password
// ? secure the password
userSchema.pre('save', async function(next){
    // console.log("pre method", this);
    const user = this;

    if(!user.isModified('password')){
        next();
    }
    try{
        const saltRound = await bcrypt.genSalt(10);
        const hash_password = await bcrypt.hash(user.password, saltRound);
        user.password = hash_password;
    }catch(error){
        next(error);
    }
})



// What is JWT?
// JSON Web Tokens (JWT) is an open standard (RFC 7519) that defines a compact and 
// self-contained way.
// JWT are often used for authentication and authorization in web application.
// 1. **Authentication: Verifying the identity of a user or client.
// 2. **Authorization: Determining what actions a user or client is allowedd to perform. 

// **Components fo a JWT:
//  Header: Contains metadata about the token, such as the type of token and the signing  algorithm bing used.
//  Payload: Contains claims or statements about an entity (typically, the user) and additional data.
//           Common claims include user ID, username, and expiration time.
//  Signature: To verify that the sender of the JWT is who it says it is and
//             to ensure that the message was not changed along the way, a signing is included.







// compare the password
userSchema.methods.comparePassword = async function(password){
    return bcrypt.compare(password, this.password);
};


// json web token
// Token, such as JWTs (JSON Web Tokens), are ty pically not stored in the database along with other user
// details. Instead, they are issued by the server during the authentication process and then stored on the 
// client-side (e.g., ing cookies or local storage) for later use.

userSchema.methods.generateToken = async function() {
    try {
        return jwt.sign(
            {
            userId: this ._id.toString(),
            email: this.email,
            isAdmin: this.isAdmin,           
        },
        process.env.JWT_SECTECT_KEY,
        {
            expiresIn: "30d",
        }       
        );
    } catch (error) {
        console.error(error);
    }
};


// define the model or the collection name
const User = new mongoose.model("User", userSchema);

module.exports = User