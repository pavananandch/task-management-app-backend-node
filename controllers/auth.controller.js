const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
    try {
        
        const {userName, password, email, mobile} = req.body;
        console.log(userName, password, email, mobile)
        const newUser = new userModel({
            userName,
            password,
            email,
            mobile
        });
        const result = await newUser.save();
        console.log(result);
        res.status(200).json({message: "User registered succesfully"});
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    }
};

const login = async (req, res) => {
    try {
        const {userName, password} = req.body;
        const user = await userModel.findOne({userName});
        if(user.password === password) {
            console.log(user, process.env.JWT_SECRET)
            const token = jwt.sign({user: user.userName}, process.env.JWT_SECRET);
            res.status(200).json({token, user });
        } else {
            res.status(500).json({message: "Invalid credentials"});
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    }
};

module.exports = {
    register,
    login
}