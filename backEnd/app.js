
const express = require("express");
const router = express.Router();
const sequelize = require('./config/database');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3001;



app.get("/test", (req, res) => {
  res.json({ message: "Hello from Server!"});
});

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