import Comment from '../models/Comment';

class CommentsController {
    find(req, res) {
	Comment.findAll()
	    .then(comments => res.json(comments))
	    .catch(err => console.log('comments.controller.find >>> ', err));
    }
    
    create(req, res) {
	Comment.create(req.body)
	    .then(comment => res.json(comment))
	      .catch(err => console.log('comments.controller.create >>> ', err));
    }
}

export default CommentsController;
