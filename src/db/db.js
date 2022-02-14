import { dbConfig } from './db.config.js';
import Sequelize from 'sequelize';
import { SavedRequestModel } from '../models/savedRequest.model.js';

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
	host: dbConfig.HOST,
	dialect: dbConfig.dialect,

	pool: {
		max: dbConfig.pool.max,
		min: dbConfig.pool.min,
		acquire: dbConfig.pool.acquire,
		idle: dbConfig.pool.idle,
	},
});

const requests = SavedRequestModel(sequelize, Sequelize);

export const db = {
	Sequelize,
	sequelize,
	requests,
};
