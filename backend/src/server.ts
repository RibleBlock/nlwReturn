import express from 'express';

const app = express();

app.get('/users', (req, res) => res.send('VOCE ESTA NA PAGINA DE USUARIOS'));

app.listen(3333, () => console.log('HTTP server running.') );
