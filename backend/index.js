import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import authRouter from './routes/auth.route.js'

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("Connected to db")
}).catch((err) => console.log(err));

const app = express();
const Port = process.env.PORT;

app.use(express.json());
app.use(cors());

app.get('/test', (req, res) => {
    res.send("test")
})

app.use('/api/auth', authRouter)

app.listen(Port, ()=> {
    console.log(`Server listenting ${Port}`)
})

