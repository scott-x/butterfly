const getTimeString = require('./date');

const { 
	mkdir, 
	rename, 
	copy, 
	mkdir_p, 
	rm_rf, 
	readFile ,
	readJson, 
	createFile , 
	writeFile, 
	writeJson,
	exists
	 } = require('./fs');

module.exports={
	getTimeString,
	mkdir,
	rename,
	copy,
	mkdir_p,
	rm_rf,
	readFile,
	readJson,
	createFile,
	writeFile,
	writeJson,
	readJson,
	exists
}