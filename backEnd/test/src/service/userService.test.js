const { expect } = require('chai');
const sinon = require('sinon');
const userServices = require('../../../src/services/UserService');

describe('Unit tests from User Services', () => {
  const newUser = {
    name: "test",
    email: "test@test.com",
    password: "test123!@#"
  };

  const expectedResult = {
    success: true,
    message: 'User created successfully',
    user: {
      ...newUser,
      id: 1
    }
  };
  
  afterEach(sinon.restore);
  
  describe('When a user is created successfully:', () => {
    it('should return an object with {success: true}', async () => {
      sinon.stub(userServices, 'createUser').resolves(expectedResult)
      const result = await userServices.createUser(newUser);
      expect(result).to.be.an("object");
      expect(result).to.have.property('success').to.be.equal(true);
    });
  })

  describe('When a user is not created successfully:', () => {
    it('should return an object with {success: false}', async () => {
      sinon.stub(userServices, 'createUser').resolves({...expectedResult, success: false});
      const result = await userServices.createUser(newUser);
      expect(result).to.be.an('object');
      expect(result).to.have.property('success').to.be.equal(false);
    });
  })

});
