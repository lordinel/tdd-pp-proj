const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('This is a TDD-Pair Programming Demo'));

app.listen(port, () => console.log(`App listening on port ${port}`));
