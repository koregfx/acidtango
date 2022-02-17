export const SavedRequestModel = (sequelize, Sequelize) => {
	const Request = sequelize.define('request', {
		word: {
			type: Sequelize.STRING,
		},
		email: {
			type: Sequelize.STRING,
		},
		page: {
			type: Sequelize.INTEGER,
		},
		limit: {
			type: Sequelize.INTEGER,
		},
		raw: {
			type: Sequelize.TEXT('long'),
		},
	});
	return Request;
};
