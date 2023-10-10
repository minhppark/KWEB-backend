const express = require('express');

const port = 3000;
const app = express();

app.get('/factorial', (req, res) => {
    const { number } = req.query;
    return res.redirect(`/factorial/${number}`);
});

app.get('/factorial/:number', (req, res) => {
    const { number } = req.params;
    let result = 1;
    for (let i = 0; i < number; i++) {
        result = result * (i + 1)};
    return res.send(`${number} = ${result}`);
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));