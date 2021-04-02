const Menu = require('../../models/menu')
function menuController(){
    return {
        menu(req, res){
            Menu.find().then(function(food){
                // console.log(food)
               return res.render('menu',{food : food})  
            })
        }
    }
}

module.exports = menuController

// {food : food}
//{key : array that is paased in func}