import express from 'express';
import path from 'path';

let app = express();

app.get('/*', (req,res) => {
  //res.send('Hello World');
  res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(1234, () => console.log('Application is running on localhost:1234'));
