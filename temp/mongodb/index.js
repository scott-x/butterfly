/**
  Model: Model
  query_obj: 是一个json，当传入{},则查询所有;模糊查询对应的obj为
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
model_obj : 一个与数据库字段对应的 JSON Modle
只有与数据库字段对应的才插入的进去，其他都是惘然
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
query_obj: 删除匹配query_obj的数据
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
删除所有，清空表
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
updated_obj: 更新后的数据 
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

//mongodb中的id叫:_id
module.exports = {
    find,
    findAll,
    update,
    insert,
    remove,
    removeAll
}
