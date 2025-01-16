import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './mongodb/connect.js';
import postRoutes from './routes/postRoutes.js';
import dalleRoutes from './routes/dalleRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.static('dist'))

app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);

const startServer = async()=> {
    try {
        connectDB(process.env.CONNECT_DB);
        app.listen(process.env.PORT, ()=> console.log(`Server is listening at https://localhost:${process.env.PORT}`));
    } catch (error) {
        console.log(error);
    }
}
startServer();