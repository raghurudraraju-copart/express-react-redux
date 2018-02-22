import express from 'express';

let app = express();

app.get('/*', (req,res) => {
  res.send('Hello World');
});

app.listen(1234, () => console.log('Application is running on localhost:1234'));
