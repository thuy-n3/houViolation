const mongoose = require('mongoose');
const createModel = mongoose.model.bind(mongoose);
const Schema = mongoose.Schema;


// ----------------------
// USERS
// ----------------------
const usersSchema = new Schema({
  // required for authentication: DO NOT TOUCH Or You May Get Punched
  email:     { type: String, required: true },
  password:  { type: String, required: true },
  // x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x
  
   // example of optional fields
  name:      { type: String },
  createdAt: { type: Date, default: Date.now }

})


const csvSchema = new Schema ({
	InspectionID: {type: String},
	FacilityHashID: {type: String}, 
	InspectionDate: {type: String},
	InspectionStatus: {type: String},
	FacilityName: {type: String},
	FacilityFullStreetAddress: {type: String},
	FacilityZip: {type: Number}, 
	EstablishmentType: {type: String},
	Cuisine: {type: String},
	FacilityRiskScore: {type: Number},
	FacilityRiskProfile: {type: String}
})


module.exports = {
  User: createModel('User', usersSchema),
  Coh_HV: createModel('Coh_HV', csvSchema)  
}

