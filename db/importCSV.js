const mongoose = require('mongoose')
const csv = require('fast-csv')


module.exports.importCSV = function(filePath, fileHeaders, modelName){
	csv
		.fromPath(filePath, {headers: fileHeaders})
		.on('data', function(data) {
			var Obj = mongoose.model(modelName)

			var dataObj = new Obj(); 

			Object.keys(data).forEach(function(key) {
				var val = data[key];

				if(val !== '') {
					dataObj.set(key, val);
				}
				console.log(key,val)
			})

			dataObj.save(function (err){
				console.log('SAVED! \n ---------------')
				console.log(dataObj.toObject())
				if(err) {
					console.log("error saving data", err);
				}
			})
		})
		.on('end', function(results) {
			console.log("done", results);
		});
}


