import userModel from '../models/user.models.js';
import bcrypt from 'bcrypt'

export const getUser = (req, res) => {
    res.send("getting all users")
}

export const registerUser = async (req, res) => {
   const { username, email, password } = req.body;
   console.log( username, email, password )

   const saltRounds = 10 ;
   const passwordHash = await bcrypt.hash(password, saltRounds)

   const newUser = new userModel({
    username,
    email,
    password: passwordHash
   })
   console.log(newUser);
   const savedUser = await newUser.save();
   res.status(201).json(savedUser);
}