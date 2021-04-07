const homeController = require('../app/http/controllers/homeController')
const bookController = require('../app/http/controllers/bookController')
const authController = require('../app/http/controllers/authController')
const guest = require('../app/./http/middlewares/guest')

function initRoutes(app){
    app.get('/', homeController().index)
    app.get('/book', bookController().index)
    app.post('/book', bookController().postApoint)
    app.get('/appointList', bookController().showList)
    app.get('/login',guest,authController().login )
    app.post('/login',authController().postLogin)
    app.post('/logout',authController().logout)
    app.get('/register',guest,authController().register)
    app.post('/register',authController().postRegister)

   

}
module.exports = initRoutes