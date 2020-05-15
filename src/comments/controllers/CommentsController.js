import Comment from '../models/Comment';

class CommentsController {
    async find(req, res) {
	const comments = await Comment.findAll();
	res.status(200).json(comments);
    }

    create(req, res) {
	const createSuccess = comment => res.status(201).json(comment);
	const createErrors = err => console.log(err);
	
	Comment.create(req.body)
	    .then(createSuccess)
	    .error(createErrors);
    }
}

export default CommentsController;
