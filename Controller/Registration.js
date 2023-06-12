 const {userNameValidate}  = require('../helpers/userNameHelpers');
 const {emailvalidator} = require('../helpers/emailValidator');
 const registration = async (req, res) => {
    
        try {
            const {fullName , email, password} = req.body;
            if(!fullName) {
                return res.status(404).json({
                    error:"FullName Missing"
                })
            }else if(!userNameValidate(fullName ,4 , 16)){
                return res.status(404).json({
                    error:"Fullname must contain min 5 & max 16"
                })
            }
           
            
            else if(!email){
                return res.status(404).json({
                    error:"Email Missing"
                })
            }else  if (!emailvalidator(email)){
                return res.status(404).json({
                    error:"email does not valid "
                })
            }else if ( !password ) {
                return res.status(404).json({
                    error:" Password Missing"
                })
            }else{
                res.status(200).json({
                
                    data:{
                        fullName , email, password
                    }
                })    
            }
               
            
        } catch (error) {
            res.status(404).json({
                message:"Registration Route not working  "
            })    
        }
        
    
}
module.exports = registration;