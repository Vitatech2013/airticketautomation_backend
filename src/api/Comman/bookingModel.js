import mongoose from 'mongoose'

const flightbookSchema = new mongoose.Schema({

    FlightNumber:{
        type: String
       
    },
    FlightName:{
        type: String
       
    },
    
    ArrivalDate:{
        type: String
       
    },
    
    ArrivalTime:{
        type: String
       
    },
    
    DepatureDate:{
        type: String
       
    },
    
    DepatureTime:{
        type: String
       
    },
    
    NoOfSeats:{
        type: String
       
    },
    PerSeatAmount:{
        type: String
       
    },  
     Source:{
        type: String
       
    },
    Destination:{
        type: String
       
    },
    BookId:{
        type: String
       
    }, 
     UserName:{
        type: String
       
    },  
    BookingDate:{
        type: String
       
    }, 
    Seats:{
        type: String
       
    },
    Amount:{
        type:String
    },
   
    Status:{
        type:String
    }
    
}, {
    timestamps: true
});

const model = mongoose.model('bookingdetails', flightbookSchema)



export default model