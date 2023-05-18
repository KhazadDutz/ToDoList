require('dotenv').config();
const { expect } = require('chai');
const userServices = require('../../../src/services/UserService');
const User = require('../../../src/models/UserModel');

describe('Unit tests from User Services', () => {
  const newUser = {
    name: "test",
    email: "test@test.com",
    password: "test123!@#"
  };

  beforeEach(async () => {
    await User.destroy({truncate: {cascade: true}});
  });
  
  //Testes relacionados à criação de um usuário
  describe('When a user is created successfully:', () => {
    it('should return an object with {success: true}', async () => {
      const res = await userServices.createUser(newUser);
      expect(res).to.be.an("object");
      expect(res).to.have.property('success').to.be.equal(true);
    });
  })
  
  describe('When a user is not created successfully:', () => {
    it('should throw an Error, when the user is already registered', async () => {
      //Primeira inserção no DB
      await userServices.createUser(newUser);
      
      //Segunda inserção no DB, com o mesmo User
      try {
        await userServices.createUser(newUser);
        
        expect.fail('Expected and error to be thrown');
      } catch (error) {
        expect(error).to.exist;
        expect(error.message).to.include('User already registered');
      }
    });
  });

  //Testes realacionados à procura de usuário(s)
  describe('When a user is found successfully', () => {
    it('should return the users data', async () => {
        await userServices.createUser(newUser);
        const res = await userServices.findUser(newUser);

        expect(res).to.be.an('object');
        expect(res.user).to.include(newUser);
        expect(res).to.have.property('success').to.be.equal(true);
    });
  });



});
