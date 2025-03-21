const express = require('express');

const app = express();

app.get('/api/hello', (req, res) => {
  res.send('Hello Express');
});

app.listen(3000, () => {
  console.log(`서버가 3000포트에서 실행중입니다...`);
});
