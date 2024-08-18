import express from 'express';
const app = express();
const PORT = 3013;
app.get('/', (req, res) => {
  res.send('Hello, World! \n v1.0.2');
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Changes of app to 1.0.2`);
});
