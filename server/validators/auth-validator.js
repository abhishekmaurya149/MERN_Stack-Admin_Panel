const { z } = require("zod");
// Creating an object schema
const signupSchema = z.object({
    username: z
    .string({required_error: "Name is required"})
    .trim()
    .min(4, {message:"Name must be at least of 4 chars."})
    .max(255, { message: "Name must not be more than 255 characters"}),
    email: z
    .string({required_error: "Email is required"})
    .trim()
    .email( {message:"Invalid email address"}) 
    .max(255, { message: "Email must not be more than 255 characters"}),    
    phone: z
    .string({required_error: "Phone  is required"})
    .trim() 
    .min(10, {message:"Phone must be at least of 10 chars."})
    .max(20, { message: "Phone must not be more than 20 characters"}), 
    password: z
    .string({required_error: "Password  is required"})   
    .min(6, {message:"Password must be at least of 6 chars."})
    .max(20, { message: "Password must not be more than 20 characters"}),   
})

module.exports = signupSchema;