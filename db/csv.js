const importCSV = require('./importCSV');
const Coh_HV = require('./schema.js').Coh_HV;
const mongoose = require('mongoose');

// InspectionID,FacilityHashID,InspectionDate,InspectionStatus,FacilityName,FacilityFullStreetAddress,FacilityZip,EstablishmentType,Cuisine,FacilityRiskScore,FacilityRiskProfile

const csvHeaders= {
	Coh_HV: {	
		headers: [
			'InspectionID',
			'InspectionDate',
			'InspectionScore',
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
	importCSV.importCSV(__dirname+'/full.csv', csvHeaders.Coh_HV.headers,'Coh_HV')
}

module.exports = CSV_import_fn

//this is being read in server.js when there a connection when you do npm run go 

//the headers in this model have to match the headers in schema 


//InspectionUID,InspectionDate,InspectionScore,InspectionStatus,FacilityName,FacilityFullStreetAddress,FacilityZip,EstablishmentType,Cuisine,FacilityRiskScore,FacilityRiskProfile




