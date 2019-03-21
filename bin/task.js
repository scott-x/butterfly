const { exists, copy } = require('slimz');
const path = require('path');
var chalk = require('chalk');
var co = require('co');

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
module.exports={
	run
}
