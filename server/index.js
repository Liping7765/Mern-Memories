import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import { USER, PASSWORDS, PORT_NUMBER} from './local_config.js';


import postRoutes from './routes/posts.js';

const app = express();



app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

//redirect url name to include 'posts'
app.use('/posts', postRoutes);

//database login credentials 
const CONNECTION_URL = `mongodb+srv://${USER}:${PASSWORDS}@cluster0.vqwln.mongodb.net/Cluster0?retryWrites=true&w=majority`;
const PORT = PORT_NUMBER || 5000;

//connect to database 
mongoose.connect( CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then( () => app.listen( PORT, () => console.log( `Server running on Port: ${PORT}`)))
    .catch(( error ) => console.log( error.message ));

