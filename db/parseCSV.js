const csv = require("fast-csv"); 

csv
.fromPath("full.csv", {
	objectMode: true, 
	headers: true,
})
.on("data", function(data){
	console.log(data);
})
.on("end", function(){
	console.log("done");
})



