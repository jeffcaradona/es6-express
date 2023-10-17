import express from 'express';
const router = express.Router();

import controller from '../controllers/indexController.js';

import appMW from '../middleware/app.js';
import info from '../../package.json' assert { type: 'json' };

router.use(appMW.initResponseLocals(info.name));


/* GET home page. */
router.get('/', controller.index);

export default router;