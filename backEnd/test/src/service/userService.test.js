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
  describe('When a User is created successfully:', () => {
    it('should return an object with {success: true}', async () => {
      const res = await userServices.createUser(newUser);
      expect(res).to.be.an("object");
      expect(res).to.have.property('success').to.be.equal(true);
    });
  })
  
  describe('When a User is not created successfully:', () => {
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
  describe('When a User is found successfully', () => {
    it('should return the users data', async () => {
        //Creates a new user
        await userServices.createUser(newUser);
        //Search for that same user
        const res = await userServices.findUser(newUser);

        expect(res).to.be.an('object');
        expect(res.user).to.include(newUser);
        expect(res).to.have.property('success').to.be.equal(true);
    });
  });
  describe('When a User is not found successfully', () => {
    it('should return an object with property success: false', async () => {

      //The beforeEach has already deleted all rows from the DB
      const res = await userServices.findUser(newUser);

      expect(res).to.be.an('object');
      expect(res.success).to.be.equal(false);
      expect(res.message).to.include('User not found');
    });
  });


});
