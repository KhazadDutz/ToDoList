const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

chai.use(chaiHttp);


describe('User Requests', () => {
  describe('/POST User', () => {
    it('should return a HTTP Status 201', async () => {
      let newUser = {
        name: 'Test',
        email: 'test@test.com',
        password: 'senha123!@#'
      };

      const res = await chai.request('http://localhost:3001').post('/users/signup').send(newUser);

      expect(res).to.have.status(201);
      

    });
  });
});