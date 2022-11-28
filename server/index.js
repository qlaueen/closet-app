import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

// routes
import itemsRoutes from './routes/items.js';
import usersRoutes from './routes/users.js';


const app = express();
dotenv.config();

app.use(bodyParser.json({limit: "30mb", extended : true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended : true}));
app.use(cors());

app.use('/items', itemsRoutes);
app.use('/users', usersRoutes);

// mongodb now

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
.catch((error) => console.log(error.message));

