const express = require('express');
const mongoose = require('mongoose');
const encrypt = require('mongoose-encryption');
require('dotenv').config()


const port = 9000;

const app = express();
app.use(express.urlencoded({ extended: true }));

const DB_HOST = process.env.DB_HOST
const KEY = process.env.DB_KEY

const url = `${DB_HOST}/Voting?`
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(console.log("Successfully connected to DB"))
    .catch(e => console.log(e))

const userSchema = new mongoose.Schema({
    email: String,
    password: String
})

// encryption key
const secret = KEY
// encrypt the password only
userSchema.plugin(encrypt, { secret: secret, encryptedFields: ['password'] })
const User = mongoose.model("user", userSchema);

app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    User.findOne({ email: username }, (err, foundUser) => {
        if (!err) {
            if (foundUser.password === password) {
                res.send("Successfully logged in.")
            } else {
                res.send("Wrong Password")
            }
        } else {
            console.log(err)
        }
    })
})

app.post("/register", (req, res) => {
    const username = req.body.username
    const password = req.body.password
    // Creating a new user
    const user = new User({
        email: username,
        password: password
    })
    // saving to DB
    user.save(user, (err) => {
        if (!err) {
            res.send("Successfully Registered")
        } else {
            console.log(err)
        }
    })
})






app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
