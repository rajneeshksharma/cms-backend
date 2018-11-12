import express from 'express';
import cmsController from './cms.controller';


export const cmsRouter = express.Router();

cmsRouter.route('/cmspage').post(cmsController.postCmsData).get(cmsController.getCmsData);

