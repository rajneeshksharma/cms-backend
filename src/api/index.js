import express from 'express';
import { cmsRouter } from './resources/cms';

export const restRouter = express.Router();

restRouter.use('/cms',cmsRouter);
