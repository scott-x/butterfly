var fs = require('fs');
var fsa = require('fs-extra');

function mkdir(folder_path){
	const promise = new Promise((resolve,reject)=>{
       fs.mkdir(folder_path,err=>{
       	if (err) {reject(err)}  
       	resolve(folder_path) 
       })
	})
	return promise;
	
}

function rename(old_path,new_Path){
	const promise = new Promise((resolve,reject)=>{
       fs.rename(old_path,new_Path,err=>{
       	if (err) { reject(err)}
       	resolve('success')	
       })
	})
	return promise;
}

function mkdir_p(path){
  var promise = new Promise((resolve,reject)=>{
	  fsa.mkdirs(path, function(err){
	    if (err) reject(err);
        resolve()
	  });
  })
  return promise;
}

//copies file and folder
function copy(from,to){
  const promise = new Promise((resolve,reject)=>{
  	fsa.copy(from, to, function(err){
  	  if (err) reject(err);
       resolve()
  	}); 
  })
  return promise;
}

function rm_rf(dir){
  const promise = new Promise((resolve,reject)=>{
  	fsa.remove(dir, function(err){
  	  if (err) reject(err);
      resolve()
  	});
  })
  return promise;
}

function readFile(file){
	const promise = new Promise((resolve,reject)=>{
		fs.readFile(file,'utf-8',(err,data)=>{
			if (err) reject(err)
			resolve(data)	
		})
	})
	return promise;
}

function readJson(file){
	const promise = new Promise((resolve,reject)=>{
		fs.readFile(file,'utf-8',(err,data)=>{
			if (err) reject(err)
			resolve(JSON.parse(data))	
		})
	})
	return promise;
}

function createFile(file){
	const promise = new Promise((resolve,reject)=>{
		fsa.createFile(file, function(err) {
		  if (err) reject(err)
		  resolve()	
		  //file has now been created, including the directory it is to be placed in
		})
	})
	return promise;
}

function writeFile(file,data){
	const promise = new Promise((resolve,reject)=>{
		fsa.outputFile(file, data,function(err) {
		  if (err) reject(err)
		  resolve()	
		  //file has now been created, including the directory it is to be placed in
		})
	})
	return promise;
}

//可以将数据库的data导出为json
//json_data: {name:"scott",age:18}
function writeJson(file,json_data){
	const promise = new Promise((resolve,reject)=>{
		fsa.outputJson(file, json_data,function(err) {
		  if (err) reject(err)
		  resolve()	
		  //file has now been created, including the directory it is to be placed in
		})
	})
	return promise;
}

function readJson(jsonFile){
	const promise = new Promise((resolve,reject)=>{
       fsa.readJson(jsonFile, function(err, data) {
           if (err) reject(err)
           resolve(data)
         })
	})
	return promise;
}

function exists(Path){
	const promise = new Promise((resolve,reject)=>{
		fs.exists(Path, function(exists){
		        if(!exists){
		            resolve(false)
		        }else{
		            resolve(true)
		        }
		});
	})
	return promise;
}


//无论是创建文件还是文件夹，如果文件不存在则会自动创建，如果存在则会忽略
//所有函数都返回promise
module.exports={
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
};
