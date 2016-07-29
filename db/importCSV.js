const mongoose = require('mongoose')
const csv = require('fast-csv')


module.exports.importFile = function(filePath, fileHeaders, modelName){
	csv
		.fromPath(filePath, {headers: fileHeaders})
		.on('data', function(data) {

			var Obj = mongoose.model(modelName)

			var dataObj = new Obj(); 

			dataObj.keys(data).forEach(function(key) {
				var val = data[key];

				if(val !== '')
					dataObj.set(key, val);
			})

			dataObj.save(function (err){

				if(err)
					console.log(err);
			})
		})
		.on('end', function() {
			console.log("done");
		});
}


