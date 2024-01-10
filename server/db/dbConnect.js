const mongoose = require('mongoose')
const chalk = require('chalk')
require('dotenv').config()


const dbConnect = async () => {
    mongoose.connect(process.env.DB_URL, {}).then( () => {
        console.log("connected to DB successfully");
        console.log(chalk.green("DB Connected."))
    }).catch((err) => {
        console.log(chalk.red("Error in connecting to DB"))
        console.error(err);
    })
} 

module.exports = dbConnect