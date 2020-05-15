describe('Routes: Comments', () => {
  describe('GET /comments', () => {
    it('returns a complete list of comments', done => {
      request
        .get('/comments')
	.end((err, res) => {
	    expect(res.status).to.eql(200);
	  done(err);
	});
    });
  });

  describe('POST /comments', () => {
    it('creates a new comment', done => {
      request
        .post('/comments')
	.send({content: 'example'})
        .end((err, res) => {
	  expect(res.status).to.be.eql(201);
	  done(err);  
        });
    });
  });
});
