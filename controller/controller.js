const bakedGoods = require('../models/bakedgoods');

const html = `
<html>
    <body>
        <h1>Welcome to Biscoff Bakery</h1>
        <a href="/bakedgoods/">List of Baked Goods</a>
    </body>
</html>
`;

const showWelcome = (req, res) => {
    res.send(html);
};

const showList = (req, res) => {
    res.render('../view/index.ejs', {
        bakedGoods: bakedGoods,
    });
};

const displayList = (req, res) => {
    res.render('../view/show.ejs', {
        bakedGoods: bakedGoods[req.params.id],
    });
};

const createPost = (req, res) => {
    res.render('../view/create.ejs', {});
};

const postData = (req, res) => {
    bakedGoods.push(req.body);
    console.log(bakedGoods);
    res.redirect('/bakedgoods');
};

module.exports = {
    showWelcome,
    showList,
    displayList,
    createPost,
    postData,
};
