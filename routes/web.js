// web related routes
const basicController = require("../app/http/controllers/basicController");
const reserveController = require("../app/http/controllers/reserveController");
const menuController = require("../app/http/controllers/menuController");

function initRoutes(app){
    app.get('/' , basicController().home);
    app.get('/about' , basicController().about);
    app.get('/contact' , basicController().contact);
    app.get('/contacted' , basicController().postContact);
    app.get('/table' , reserveController().table);
    app.post('/table', reserveController().postTable);
    app.get('/tableconfirm' ,reserveController().tableConfirm)
    app.get('/tablenotconfirm' ,reserveController().tablenotConfirm)
    app.get('/menu', menuController().menu);

   
}


module.exports = initRoutes
