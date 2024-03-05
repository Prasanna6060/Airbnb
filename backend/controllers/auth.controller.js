import userModel from '../models/user.models.js';

export const getUser = (req, res) => {
    res.send("getting all users")
}

export const registerUser = (req, res) => {
   const { username, email, password } = req.body;
   console.log( username, email, password )
}