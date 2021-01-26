const bakeGoods = require('../controller/controller.js');

module.exports = (app) => {
    app.get('/', bakeGoods.showWelcome);
    app.get('/bakelist', bakeGoods.showList);
    app.get('/bakegoods/:id', bakeGoods.displayList);
    app.get('/create', bakeGoods.createPost); //display form only
    app.post('/create', bakeGoods.postData);
    //another page route to push the data to the body
};
