export const paginateData = (req, data) => {
	const query = req.query.query;
	const page = parseInt(req.query.page ?? 1);
	const limit = parseInt(req.query.limit ?? 10);
	const email = req.query.email;

	const startIndex = (page - 1) * limit;
	const endIndex = page * limit;

	const jokes = data.slice(startIndex, endIndex);
	const baseLink = 'http://localhost/api/jokes/search';

	const paginatedData = {};

	paginatedData.search = query;
	if (email) {
		paginatedData.email = email;
	}
	paginatedData.linkOfTheOriginalAPI = `https://api.chucknorris.io/jokes/search?query=${query}`;
	paginatedData.numOfPages = Math.floor(data.length / limit);
	paginatedData.actualPage = page;

	if (endIndex < data.length) {
		paginatedData.nextPage = {
			page: page + 1,
			limit,
			link: `${baseLink}?query=${query}&page=${page + 1}&limit=${limit}`,
		};
	}
	if (startIndex > 0) {
		paginatedData.previousPage = {
			page: page - 1,
			limit,
			link: `${baseLink}?query=${query}&page=${page - 1}&limit=${limit}`,
		};
	}
	paginatedData.jokes = jokes;

	return paginatedData;
};
