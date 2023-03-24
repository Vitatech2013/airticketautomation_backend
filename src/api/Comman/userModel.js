import mongoose from 'mongoose'

const registrtionSchema = new mongoose.Schema({

   FirstName: {
        type: String
      
    },
   LastName: {
        type:String
       
    },
    UserName: {
        type: String
      
    },
   Password: {
        type:String
        
    },
    Emailid: {
        type:String
       
    },
    Gender:{
        type:String
    },
    PhoneNo: {
       
        type: String
      
    },
    Address: {
        
        type: String
      
    }
    
   
}, {
    timestamps: true
});

const model = mongoose.model('Registration', registrtionSchema)


export default model