import Comment from '../models/Comment';

class CommentsController {
    async find(req, res) {
	const comments = await Comment.findAll();
	res.json(comments);
    }

    create(req, res) {
	const createSuccess = comment => res.json(comment);
	const createErrors = err => console.log(err);
	
	Comment.create(req.body)
	    .then(createSuccess)
	    .error(createErrors);
    }
}

export default CommentsController;
