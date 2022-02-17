import express from 'express';
import cors from 'cors';

import apiRouter from './routes/api.routes.js';
import { db } from './db/db.js';

export const app = express();

app.set('port', process.env.NODE_LOCAL_PORT || 3000);

//  Midleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

const connectDb = async () => {
	try {
		await db.sequelize.authenticate();
		console.log('Connection has been established successfully.');
		db.requests.sync().then(() => {
			console.log('New table created');
		});
	} catch (error) {
		console.error('Unable to connect to the database:', error);
	}
};
connectDb();

// Router API
app.use('/api', apiRouter);
