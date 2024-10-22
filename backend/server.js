import express from 'express';
import { connectToDB } from './db/connectToDB';

const app = express();

app.use(express.json());    

connectToDB()
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Server listening at PORT ${process.env.PORT}`);
        })
    })
    .catch(() => {
        console.log("Error connecting to database");
    })