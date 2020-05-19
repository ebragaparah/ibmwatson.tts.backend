import sinon from 'sinon';
import CommentsController from '../../../src/comments/controllers/CommentsController';
import Comment from '../../../src/comments/models/Comment';

describe('Controllers: Comments', () => {
  const controller = new CommentsController();
  let request = {};
  let response = {
	  json: sinon.spy()
  };
    
  describe('find()', () => {
	  it('calls the model.findAll()', () => {
	    const spy = sinon.spy(Comment, "findAll");
	    controller.find(request, response);
	    expect(spy.called).to.be.true;
	    spy.restore();
	  });
  });

  describe('create()', () => {
	  it('calls model.create()', () => {
	    request = {body: {content: 'foo'}};

	    const spy = sinon.spy(Comment, "create");
	    controller.create(request, response);
	    expect(spy.called).to.be.true;
	    spy.restore();
	  });
  });
});
