import dotenv from 'dotenv';
dotenv.config();

import { app } from './src/app.js';

(async () => {
	try {
		await app.listen(app.get('port'));
		console.log(`Server up in port:  ${app.get('port')}`);
	} catch (error) {
		console.log('Server down', error);
	}
})();
