function getTimeString(type){

	var date = new Date(),year,mon,day,hours,minutes,seconds;
	year=date.getFullYear();
	mon = date.getMonth()  + 1;   //getMonth()返回的是0-11，则需要加1
	day = date.getDate(); 
	hours = date.getHours(); 
  minutes=date.getMinutes(); 
  seconds=date.getSeconds();
  //如果小于9的话，则需要加上0
  mon=mon<=9?('0'+mon):mon       
	day=day<=9?("0" + day):day;  //getdate()返回的是1-31，则不需要加1
	hours=hours<=9?('0'+hours):hours;                   
	minutes=minutes<=9?('0'+minutes):minutes;
  seconds=seconds<=9?('0'+seconds):seconds;
    
  switch(type){
      // 年月日
     case 'yyyy-mm-dd':
       return year+'-'+mon+'-'+day;
     case 'yyyy/mm/dd':
       return year+'/'+mon+'/'+day;  
     case 'yyyymmdd':
       return year+mon+day;
     case 'yyyy年mm月dd日':
       return year+'年'+mon+'月'+day+'日'; 
     // 年月
     case 'yyyy-mm':
       return year+'-'+mon; 
     case 'yyyy/mm':
       return yyyy+'/'+mon;  
     case 'yyyy年mm月': 
       return year+'年'+mon+'月'; 
     //月日
     case 'mmdd':
       return mon+day;
     case 'mm/dd':
       return mon+'/'+day;
     case 'mm月dd日':
       return mon+'月'+day+'日'; 
     //时分秒
     case 'hh:mm:ss':
       return  hours+":"+minutes+":"+seconds;
     case "hh时mm分ss秒":
       return hours+"时"+minutes+"分"+seconds+"秒";
     default:
       return year+'年'+mon+'月'+day+'日'+' '+hours+":"+minutes+":"+seconds;     
  }
}

module.exports=getTimeString;