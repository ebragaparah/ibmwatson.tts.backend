import express from 'express';
import CommentsController from '../controllers/CommentsController';

const router = express.Router();
const commentsController = new CommentsController();

router.get('/', (req, res) => {
    commentsController.find(req, res);
});

router.post('/', (req, res) => {
    commentsController.create(req, res);
});

router.get('/:id', (req, res) => {
    commentsController.synthesize(req, res);
});

export default router;
