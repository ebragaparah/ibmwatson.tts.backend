import express from 'express';
import CommentsController from '../controllers/CommentsController';

const router = express.Router();

router.get('/', (req, res) => {
    const commentsController = new CommentsController();
    commentsController.getAll(req, res);
});

export default router;
