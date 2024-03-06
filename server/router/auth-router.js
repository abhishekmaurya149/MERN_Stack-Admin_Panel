const express =require('express');
const router = express.Router();
const authControllers = require("../controllers/auth-controller");
const signupSchema = require("../validators/auth-validator");
const validate = require("../middlewares/validate-middleware");
const authMiddleware = require("../middlewares/authMiddleware");
// router.route('/', (req, res) => {
//     res.status(200).send('This is router world.');
//  });


//GET means = Read Data
//POST means = Insert Data
//PUT or PATCH  means = Update Data or insert if a new id
//DELETE means = Delete Data

 router.route('/').get(authControllers.home);

 router
 .route('/register')
 .post(validate(signupSchema), authControllers.register);

 router.route('/login').post(authControllers.login);

router.route("/user").get(authMiddleware, authControllers.user);

 module.exports = router;