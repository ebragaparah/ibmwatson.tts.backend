import express from 'express';
//import controller from '../controllers';

const router = express.Router();
//router.get('/', controller.getAll());
router.get('/', (req, res) => {
    res.send([{content: 'Any content'}]);
});

export default router;
