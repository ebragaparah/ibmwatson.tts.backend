import sinon from 'sinon';
import CommentsController from '../../../src/comments/controllers/CommentsController';

describe('Controllers: Comments', () => {
    const comments = [{
	content: 'Any content'
    }];
    
    describe('find()', () => {
	it('returns a list of all comments', () => {
	    const request = {};
	    const response = {
		json: sinon.spy()
	    };
	    
	    const controller = new CommentsController();
	    controller.find(request, response);

	    expect(response.json.called).to.be.true;
	    //expect(response.json.calledWith(comments)).to.be.true;
	});
    });
});
