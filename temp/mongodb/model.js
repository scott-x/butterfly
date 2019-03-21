var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//define your schema here
var jobPathSchema = new Schema({ job_number: String,path:String,create_time:Date});
var jobDetailSchema = new Schema({
 title:String,  	
 job: String,
 brand_country:String,
 author:String,
 text:String,
 time:Date,
 create_time:String,
 additional_notes:String,
 program:String,
 supplier:String,
 buyer:String,
 due_date:String,
 packout_date:String,
 ship_date:String,
 instore_date:String,
 status:String,
 contact:String,
 job_status:String
});


//define you model here: model对应的表
var JobDetailModel = mongoose.model('benchmark_job_detail', jobDetailSchema); // 这个表名用这个schema
var JobPathModel = mongoose.model('benchmark_job_path', jobPathSchema);

mongoose.connect('mongodb://localhost:27017/benchmark_job_detail',{ useNewUrlParser: true } ); //连接对应的数据库, 如果sql操作影响了行数，数据库会自动创建

module.exports={
   JobDetailModel,
   JobPathModel
}