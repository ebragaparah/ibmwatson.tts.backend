import sinon from 'sinon';
import CommentsController from '../../../src/comments/controllers/CommentsController';

describe('Controllers: Comments', () => {
    const comments = [{
	content: 'Any content'
    }];
    
    describe('getAll()', () => {
	it('returns a list of all comments', () => {
	    const request = {};
	    const response = {
		send: sinon.spy()
	    };
	    
	    const controller = new CommentsController();
	    controller.getAll(request, response);

	    expect(response.send.called).to.be.true;
	    expect(response.send.calledWith(comments)).to.be.true;
	});
    });
});
