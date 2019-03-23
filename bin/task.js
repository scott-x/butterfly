const { exists, copy, readFile, writeFile} = require('slimz');
const path = require('path');
var chalk = require('chalk');
var co = require('co');
var inquirer = require('inquirer');

function run(type){
	let From, To;
	From = path.resolve(__dirname,'../temp/'+type);
	co(function*(){
		var exist_package_json = yield exists('./package.json');
		if (exist_package_json) {
           var exist_routes = yield exists('./routes');
           if (exist_routes) {
            To = './routes/db';
           	copy(From,To);
           }else{
           	 To = './db';
           	 copy(From,To);
           }
		}else{
			console.log(`${chalk.red.bold("   Please move to the project folder first ^-^")}`);
			process.exit();
		}
	})
}

function mongo_task(type){
   inquirer
     .prompt([
       /* Pass your questions in here */
         {
           type: 'input',
           name: 'schema',
           message: `${chalk.magenta(' Input your schema here: ')}`,
           default: 'scott'
         },
         {
           type: 'input',
           name: 'db',
           message: `${chalk.magenta(' Input your database name here: ')}`,
           default: 'test'
         },
      
     ])
     .then(answers => {
        	let From, To;
        	From = path.resolve(__dirname,'../temp/'+type);
        	co(function*(){
        		var exist_package_json = yield exists('./package.json');
        		if (exist_package_json) {
                   var exist_routes = yield exists('./routes');
                   if (exist_routes) {
                    To = './routes/db';
                   	yield copy(From,To);
                   }else{
                   	 To = './db';
                   	yield copy(From,To);
                   }
                   let Data1 = yield readFile(To+'/index.js')
                   const myModel = answers.schema.substring(0,1).toUpperCase()+answers.schema.substring(1)+'Model';
                   const schema_name = answers.schema;
                   const newData1 = Data1.replace(/JobDetailModel/g,myModel);
                   yield writeFile(To+'/index.js',newData1)
                   let Data2 = yield readFile(To+'/model.js');
                   const newData2 = Data2.replace(/jobDetailSchema/g,schema_name+'Schema')
                                   .replace(/JobDetailModel/g,myModel).replace(/collectionName/g,schema_name)
                                   .replace(/DBNAME/g,answers.db)
                   writeFile(To+'/model.js',newData2)
        		}else{
        			console.log(`${chalk.red.bold("   Please move to the project folder first ^-^")}`);
        			process.exit();
        		}
        	})
     })
}
module.exports={
	run,
	mongo_task
}
