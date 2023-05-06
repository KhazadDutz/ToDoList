
const express = require("express");
const sequelize = require('./config/database');
const usersRoutes = require('./src/routes/UserRoutes');

require('dotenv').config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT;

app.use('/users', usersRoutes);

async function startServer() {
  try {
    await sequelize.sync(); //Sync the models with the database
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    })
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

startServer();