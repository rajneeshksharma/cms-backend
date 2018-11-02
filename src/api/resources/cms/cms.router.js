import express from 'express';
import cmsController from './cms.controller';


export const cmsRouter = express.Router();

cmsRouter.route('/home').post(cmsController.postHomeData).get(cmsController.getHomeData);

cmsRouter.route('/aboutus').post(cmsController.postAboutusData).get(cmsController.getAboutusData);

cmsRouter.route('/contactus').post(cmsController.postContactusData).get(cmsController.getContactusData);