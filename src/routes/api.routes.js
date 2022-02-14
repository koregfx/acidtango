import { Router } from 'express';

import jokeRouter from './joke.routes.js';

const router = Router();

router.use('/jokes', jokeRouter);

export default router;
