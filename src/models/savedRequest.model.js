export const SavedRequestModel = (sequelize, Sequelize) => {
	const Request = sequelize.define('request', {
		word: {
			type: Sequelize.STRING,
		},
		date: {
			type: Sequelize.DATE,
		},
		email: {
			type: Sequelize.STRING,
		},
	});
	return Request;
};
