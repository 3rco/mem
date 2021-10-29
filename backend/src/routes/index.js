import express from 'express';
import radioRouter from './radio';

const router = express.Router();


router.use('/', radioRouter);

export default router;