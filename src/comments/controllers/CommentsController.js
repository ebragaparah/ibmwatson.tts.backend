class CommentsController {
    constructor() {
    }

    getAll(req, res) {
	res.send([{content: 'Any content'}]);
    }
}

export default CommentsController;
