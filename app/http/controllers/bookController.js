const Appointment = require('../../models/appoint') 
const user = require('../../models/user')
function bookController(){
    return {
          index(req,res){
        
            return res.render('book')
          
        },
        async postApoint(req,res){
            const{date,time,doctor,address,city,mobile} = req.body
              // Validate request 
              if(!date || !time || !doctor || !address || !city || !mobile) {
                req.flash('error', 'All fields are required')                
                req.flash('address', address)
                req.flash('city', city)
                req.flash('mobile', mobile)
               return res.redirect('/book')
            }
                   
        //create appointment
        const patient = new Appointment({
            patientId:req.user.id,
            date,
            time,
            doctor,
            address,
            city,
            mobile
        })
        patient.save().then((patient) => {
            // Login
            return res.redirect('/')
         }).catch(err => {
            req.flash('error', 'Something went wrong')
                return res.redirect('/register')
         }) 

        },
         async showList(req,res){
          const booking = await Appointment.find({ }, null,{ sort: { 'createdAt': -1 }})  
          
          res.render('appointList',{booking:booking})
        }
    }
}
module.exports = bookController