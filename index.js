
const fs   = require('fs')
const path = require('path')
const csv  = require('csvtojson').Converter
const converter = new csv({})


const csvFilePath = path.join(__dirname, 'customer-data.csv')

converter.fromFile(csvFilePath, (error, result) => {
	if ( error ) {
		console.log("Conversion fails")
	}
	else {
		fs.writeFile(path.join(__dirname, 'customer-data.json'),JSON.stringify(result,null,2))
        console.log('Conversion is complete')
	    console.log(result)
	}
});
	

// write output to file
