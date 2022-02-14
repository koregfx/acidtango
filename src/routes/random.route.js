import { Router } from 'express';

import { randomJoke } from '../controllers/joke.controler.js';

const router = Router();

router.get('/', randomJoke);

export default router;
