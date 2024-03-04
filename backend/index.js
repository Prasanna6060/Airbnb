import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();


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

app.listen(Port, ()=> {
    console.log(`Server listenting ${Port}`)
})

