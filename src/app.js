import express from 'express';
import cors from 'cors';

import apiRouter from './routes/api.route.js';

export const app = express();

app.set('port', process.env.NODE_LOCAL_PORT || 3000);

//  Midleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Router API
app.use('/api', apiRouter);
