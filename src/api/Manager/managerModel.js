import mongoose from 'mongoose'

const managerSchema = new mongoose.Schema({
	UserName:{
		type:String
	},
	Password:{
        type: String
		},
		Emailid:{
			type: String
			}
		}, 
	{
		timestamps: true
	});

const model = mongoose.model('Managerlogin', managerSchema)

export default model