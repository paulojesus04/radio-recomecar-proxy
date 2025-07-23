const express = require('express');
const request = require('request');
const app = express();

app.get('/', (req, res) => {
  res.send("Servidor proxy da Rádio Recomeçar está funcionando.");
});

app.get('/radio', (req, res) => {
  const streamUrl = 'http://servidor34-5.brlogic.com:7180/live';
  req.pipe(request(streamUrl)).pipe(res);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
