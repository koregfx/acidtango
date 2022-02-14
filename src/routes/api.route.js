import { Router } from 'express';

import randomRouter from './random.route.js';

const router = Router();

router.use('/random', randomRouter);

export default router;
