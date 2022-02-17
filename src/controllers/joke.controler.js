import fetch from 'node-fetch';
import { request, response } from 'express';
import { paginateData } from '../middlewares/paginateData.js';
import { db } from '../db/db.js';
import { sendEmail } from '../libs/sendEmails.js';

export const randomJoke = async (req = request, res) => {
	if (!req.query.category) {
		const response = await fetch('https://api.chucknorris.io/jokes/random');
		const data = await response.text();

		return res.send(data);
	}
	const category = req.query.category;
	const response = await fetch(
		`https://api.chucknorris.io/jokes/random?category=${category}`
	);
	const data = await response.text();

	res.send(data);
};

export const queryJoke = async (req, res = response) => {
	const query = req.query.query;
	const email = req.query.email;
	const page = parseInt(req.query.page ?? 1);
	const limit = parseInt(req.query.limit ?? 10);

	if (!query) {
		return res.status(201).json({ ok: false, msg: 'query param needed' });
	}
	const response = await fetch(
		`https://api.chucknorris.io/jokes/search?query=${query}`
	);
	const data = await response.text();
	const dataPaginated = paginateData(req, JSON.parse(data).result);

	await db.requests.create({
		word: query,
		page,
		limit,
		email,
		raw: JSON.stringify(dataPaginated),
	});

	sendEmail(email, dataPaginated);

	res.send(dataPaginated);
};
