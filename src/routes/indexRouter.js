import express from 'express';
const router = express.Router();

import controller from '../controllers/indexController.js'
import appMW from '../middleware/app.js'
router.use(appMW.initResponseLocals);




/* GET home page. */
router.get('/', controller.index);

export default router;