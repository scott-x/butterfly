const { JobDetailModel } = require('./model');
/**
  Model: Model
  query_obj: The type of the parameter is a json，when pass a null obj--{},will query all;
  vague query obj:{key: {$regex: "some keywords", $options: '$i'}}
*/
function find(Model,query_obj){
   const promise = new Promise((resolve,reject)=>{
     Model.find(query_obj,(err,docs)=>{
     	if (err) {
     		reject(err);
     		return;
     	}
     	resolve(docs)
     })
   })
   return promise;
}

function findAll(Model){
   const promise = new Promise((resolve,reject)=>{
     Model.find({},(err,docs)=>{
       if (err) {
         reject(err);
         return;
       }
       resolve(docs)
     })
   })
   return promise;
}
/**
model_obj : The json data must be consistency with JSON Modle created in model.js
            Only the one matched with Model can be insert into the mongodb database.
*/
function insert(Model,model_obj){
    const promise = new Promise((resolve,reject)=>{
  	let myModelInstance = new Model(model_obj);
    myModelInstance.save((err,docs)=>{
    	if (err) {
    		reject(err);
    		return;
    	}
    	resolve(docs)
    })
  })
  return promise;
}
/**
query_obj: remove the document(s) matched with query_obj
*/
function remove(Model,query_obj){
   const promise = new Promise((resolve,reject)=>{
     Model.deleteMany(query_obj,(err,docs)=>{
     	if (err) {
     		reject(err);
     		return;
     	}
     	resolve(docs)
     })
   })
   return promise;
}

/**
  remove all collections
*/
function removeAll(Model){
   const promise = new Promise((resolve,reject)=>{
     Model.deleteMany({},(err,docs)=>{
     	if (err) {
     		reject(err);
     		return;
     	}
     	resolve(docs)
     })
   })
   return promise;
}
/**
_id: id
updated_obj: the data you want to updated into

collection.findAndModify is deprecated. Use findOneAndUpdate, findOneAndReplace or findOneAndDelete instead.
*/
function update(Model,_id,updated_obj){
  const promise = new Promise((resolve,reject)=>{
     Model.findOneAndReplace(_id,updated_obj,(err,docs)=>{
     	if (err) {
     		reject(err);
     		return;
     	}
     	resolve(docs)
     })
   })
   return promise;
}

//The id in mongodb is called _id rather than id.
module.exports = {
    find,
    findAll,
    update,
    insert,
    remove,
    removeAll,
    JobDetailModel
}
