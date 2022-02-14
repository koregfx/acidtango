import fetch from 'node-fetch';
import { request, response } from 'express';

export const randomJoke = async (req = request, res) => {
	if (!req.query.category) {
		const response = await fetch('https://api.chucknorris.io/jokes/random');
		const data = await response.text();

		console.log('random', data);
		return res.send(data);
	}
	const category = req.query.category;
	const response = await fetch(
		`https://api.chucknorris.io/jokes/random?category=${category}`
	);
	const data = await response.text();

	console.log('category', data);
	res.send(data);
};

export const queryJoke = async (req, res = response) => {
	const query = req.query.query;
	const response = await fetch(
		`https://api.chucknorris.io/jokes/search?query=${query}`
	);
	const data = await response.text();

	res.send(data);
};
