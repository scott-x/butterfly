const mysql = require('mysql');
const MYSQL_CONFIG = require('./config');
//创建连接对象
const con = mysql.createConnection(MYSQL_CONFIG)

//开始连接
con.connect()

//执行sql语句
/**
 sql: sql语句
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

function close(){
  con.end() //实际开发是单例模式，不用关闭mysql连接
}

module.exports={
	exec,
  close
}