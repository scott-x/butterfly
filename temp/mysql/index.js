const mysql = require('mysql');
const MYSQL_CONFIG = require('./config');
//build the connect object
const con = mysql.createConnection(MYSQL_CONFIG)

//connect
con.connect()

//run sql statement
/**
 sql: sql statement
**/

function exec(sql){
   const promise = new Promise((resolve,reject)=>{
     con.query(sql, (err,result)=>{
     	if (err) {
     		reject(err)
     		return 
     	}
     	resolve(result)
     })
   })
   return promise;
}

//You needn't disconnect the database in developing, since every instance is singleton.
function close(){
  con.end() 
}

module.exports={
	exec,
  close
}