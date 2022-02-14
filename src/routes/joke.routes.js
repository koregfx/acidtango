import { Router } from 'express';

import { queryJoke, randomJoke } from '../controllers/joke.controler.js';

const router = Router();

router.get('/random', randomJoke);
router.get('/search', queryJoke);

export default router;
