const importCSV = require('./importCSV');
const Coh_HV = require('./schema.js').Coh_HV;
const importFile = require('./importFile');
 

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


importCSV.importFile(__dirname+'./slice.csv', csvHeaders.Coh_HV.headers, 'Coh_HV')

