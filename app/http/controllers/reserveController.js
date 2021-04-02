const Info = require("../../models/info")

function reserveController() {
    return {
        table(req, res) {
            res.render('table')
        },
        tableConfirm(req, res){
            res.render('tableconfirm')
        },
        tablenotConfirm(req, res){
            res.render('tablenotconfirm')
        },
        postTable(req, res) {
            const { name, email, phone, date, time } = req.body
            // Validate Request
            if (!name || !email || !phone || !date || !time) {
                return res.redirect('/table')
            }

            const info = new Info({
               name,
               email,
               phone,
                date,
                time
            })

            info.save().then((info) => {
                // return res.redirect('/tableconfirm')
                Info.findOne({email}).then(function(user){
                    console.log(user)
                    return res.render('tableconfirm', {user : user})
                })

            }).catch(err => {
                return res.redirect('/tablenotconfirm')
            })
        }
    }
}



module.exports = reserveController