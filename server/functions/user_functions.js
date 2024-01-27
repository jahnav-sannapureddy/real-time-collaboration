const bcrypt = require('bcrypt')
const User = require('../db/models/user.model');
const chalk = require('chalk');
const jwt = require('jsonwebtoken');


const login = (req, res) => {
    const {email, password} = req.body;
    User.findOne({email})
    .then((user) => {
        if(user){
            bcrypt.compare(password, user.password)
            .then((match) => {
                if(match){
                    res.status(200).send({msg: "Login successful", user})
                }else{
                    res.status(401).send({msg: "Password does not match"})
                }
            })
            .catch((er) => {
                console.log(chalk.red("Error in comparing password"))
                res.status(500).send({msg: "Error in comparing password", er})
            })
        }else{
            res.status(404).send({msg: "User not found"})
        }
    })
    .catch((er) => {
        console.log(chalk.red("Error in finding user"))
        res.status(500).send({msg: "Error in finding user", er})
    })

}

const register = (req, res) => {
        bcrypt.hash(req.body.password, 10)
        .then((hashedPass) => {
        const user = new User({name:req.body.name ,email: req.body.email, password: hashedPass});
            user.save()
                .then((result) => {
                    console.log(chalk.green("User created successfully"))
                    var token = jwt.sign(user, process.env.JWT_SECRET,{"expiresIn": "24h"});
                    res.status(200).send({
                    success:true, 
                    })
                })
                .catch((er) => {
                    console.log(chalk.red("Error in creating user"), er)
                    res.status(500).send({success:false, er})
                })
                })
        .catch((er)=>{
        console.log(chalk.red("Error in hashing password"))
        console.log(er)
        res.status(500).send({
            msg: "Error in hashing password",
            er,
        })
        })
        
}

module.exports = {login,register}