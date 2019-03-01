const request = require('supertest');
const expect = require('chai').expect;

describe('GET /', function() {
	it('returns 200', function(done){
		request("localhost:3001").get('/').expect(200, done);
	});
});


