import express from 'express';
import cors from 'cors';

import { db } from './db/db.js';

import apiRouter from './routes/api.routes.js';

export const app = express();

app.set('port', process.env.NODE_LOCAL_PORT || 3000);

//  Midleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const connectDb = async () => {
	try {
		await db.sequelize.authenticate();
		console.log('Connection has been established successfully.');
	} catch (error) {
		console.error('Unable to connect to the database:', error);
	}
};
connectDb();

// Router API
app.use('/api', apiRouter);
