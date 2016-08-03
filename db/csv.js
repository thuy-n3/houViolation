const importCSV = require('./importCSV');
const Coh_HV = require('./schema.js').Coh_HV;
const mongoose = require('mongoose');

// InspectionID,FacilityHashID,InspectionDate,InspectionStatus,FacilityName,FacilityFullStreetAddress,FacilityZip,EstablishmentType,Cuisine,FacilityRiskScore,FacilityRiskProfile

const csvHeaders= {
	Coh_HV: {	
		headers: [
			'InspectionID',
			'FacilityHashID', 
			'InspectionDate',
		 	'InspectionStatus',
			'FacilityName',
			'FacilityFullStreetAddress',
			'FacilityZip', 
			'EstablishmentType',
			'Cuisine',
			'FacilityRiskScore',
			'FacilityRiskProfile'
		]
	}
}


function CSV_import_fn(){
	importCSV.importCSV(__dirname+'/restaurants.csv', csvHeaders.Coh_HV.headers,'Coh_HV')
}

module.exports = CSV_import_fn

//this is being read in server.js when there a connection when you do npm run go 
