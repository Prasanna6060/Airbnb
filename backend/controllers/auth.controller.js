import userModel from '../models/user.models.js';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';

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
};

export const loginUser = async (req, res) => {
    const {email, password } = req.body;
    console.log(email, password);
    const findUser = await userModel.findOne({ email })
    const correctPassword = findUser === null ? false :
    await bcrypt.compare(password, findUser.password)
    if (!(findUser && correctPassword)) {
        return res.status(401).json({
          error: 'invalid username or password'
        })
      }

      const userForToken = {
        username: findUser.username,
        id: findUser._id
      }

      const token = jwt.sign(userForToken, process.env.SECRET)
    console.log(token)
    res.status(201).send({ token, username: findUser.username, email: findUser.email })
}