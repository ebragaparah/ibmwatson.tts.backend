import Comment from '../models/Comment';
import AudioInterface from '../services/audioInterface';

class CommentsController {
  find(req, res) {
	    Comment.findAll({order: [['id', 'DESC']]})
	    .then(comments => res.json(comments))
	    .catch(err => console.log('comments.controller.find >>> ', err));
  }
    
  create(req, res) {
	  Comment.create(req.body)
	    .then(comment => res.json(comment))
	    .catch(err => console.log('comments.controller.create >>> ', err));
  }

  synthesize(req, res) {
    const audioInterface = new AudioInterface();      
    audioInterface.synthesize(req, res);
  }
}

export default CommentsController;
