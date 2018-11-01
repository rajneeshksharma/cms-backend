import express from 'express';
import cmsController from './cms.controller';


export const cmsRouter = express.Router();


cmsRouter.get('/test',cmsController.test);

