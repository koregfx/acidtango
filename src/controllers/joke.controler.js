import fetch from 'node-fetch';

export const randomJoke = async (req, res) => {
	const response = await fetch('https://api.chucknorris.io/jokes/random');
	const body = await response.text();

	console.log(body);
	res.send(body);
};
