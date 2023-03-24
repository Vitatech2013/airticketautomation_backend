import mongoose from 'mongoose'

const flightSchema = new mongoose.Schema({

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
       
    }
    
    
}, {
    timestamps: true
});

const model = mongoose.model('Addflightdetails', flightSchema)

export default model