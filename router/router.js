const bakedGoods = require('../controller/controller.js');

module.exports = (app) => {
    app.get('/', bakedGoods.showWelcome);
    app.get('/bakedgoods', bakedGoods.showList);
    app.get('/bakedgoods/:id', bakedGoods.displayList);
    app.get('/create', bakedGoods.createPost); //display form only
    app.post('/create', bakedGoods.postData);
    //another page route to push the data to the body
};
