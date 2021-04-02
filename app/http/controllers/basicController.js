function homeController(){
    return{
        home(req, res){
            res.render('home')
        },
        about(req, res){
                res.render('about')
            },
        contact(req, res){
                res.render('contact')
            },
            postContact(req, res){
                res.render('suggestion')
            }

    }
}
module.exports = homeController