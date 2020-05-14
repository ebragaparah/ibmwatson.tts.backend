describe('Routes: Comments', () => {
  const comment = {
    content: 'Any content'
  };

  describe('GET /comments', () => {
    it('returns a complete list of comments', done => {
      request
        .get('/comments')
	.end((err, res) => {
	  expect(res.body[0].to.eql(comment));
	  done(err);
	});
    });
  });
});
