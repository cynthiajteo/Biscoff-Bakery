const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/'));

require('./router/router')(app);

app.listen(port, () => {
    console.log(`Biscoff Bakery app listening on port: ${port}`);
});
