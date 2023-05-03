const app = require('../app');
const connection = require('./connection');

const PORT = process.env.PORT || 3001;

app.get("/test", (req, res) => {
  res.json({ message: "Hello from Server!"});
});

app.listen(PORT, async () => {
  console.log(`Server listening on ${PORT}`);

  const [result] = await connection.execute('SELECT 1')
  if (result) {
    console.log('MySQL connection OK');
  }
});
