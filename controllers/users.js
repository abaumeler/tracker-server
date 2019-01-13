require('dotenv').config();
const JWT = require('jsonwebtoken');
const User = require('../models/user');

let signToken = user => JWT.sign({
    iss: 'tracker-server',
    sub: user.id,
    iat: new Date().getTime(), // current time
    exp: new Date().setDate(new Date().getDate() + 1) // current time + 1 day
}, process.env.JWT_SECRET);

module.exports = {
    signUp: async (req, res, next) => {
    // const email = req.value.body.email;
    // const password = req.value.body.password;

        // const  newUser = new User({
        //    email: email,
        //    passsword: password
        // });

        // ES6
        const { email, password } = req.value.body;

        // check if there is a user with the same email
        const foundUser = await User.findOne({ email });
        if (foundUser) {
            return res.status(403).json({ error: 'Email is already in use' });
        }

        // create new user
        const newUser = new User({ email, password });
        await newUser.save();

        // Genrate the token
        const token = signToken(newUser);

        // respond with token
        res.status(200).json({ token });
    },

    signIn: async (req, res, next) => {
    // Generate token

    },

    secret: async (req, res, next) => {

    }
};
