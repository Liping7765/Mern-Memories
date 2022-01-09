import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import PASSWORDS from './local_config.js';


import postRoutes from './routes/posts.js';

const app = express();

//redirect url name to include 'posts'
app.use('/posts', postRoutes);

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

//database login credentials 
const CONNECTION_URL = `mongodb+srv://lipingmernjs:${PASSWORDS}@cluster0.vqwln.mongodb.net/Cluster0?retryWrites=true&w=majority`;
const PORT = process.env.PORT || 5000;

//connect to database 
mongoose.connect( CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then( () => app.listen( PORT, () => console.log( `Server running on Port: ${PORT}`)))
    .catch(( error ) => console.log( error.message ));

