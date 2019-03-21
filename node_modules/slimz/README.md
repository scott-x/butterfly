## Description
Utils for node.js

## API
- `getTimeString(type)`
- `copy(from,to)`
- `mkdir_p(folder)`
- `rm_rf(folder)`
- `readFile(file)`
- `readJson(jsonFile)`
- `createFile(file)`
- `writeFile(file,data)`
- `writeJson(file,json_data)`
- `exists(Path)`: 这里(文件系统)的path和js的path不一样，起点是项目跟目录

### getTimeString(type)
```
const { getTimeString } = require('slimz');
getTimeString(type)

```
#### type option
- `getTimeString()`: 2019年03月17日 11:31:18
- `getTimeString('yyyymmdd')`: 20190317
- `getTimeString('yyyy年mm月dd日')`: 2019年03月17日
- `getTimeString('yyyy-mm-dd')`: 2019-03-17
- `getTimeString('yyyy/mm/dd')`: 2019/03/17
- `getTimeString('mmdd')`: 0317
- `getTimeString('mm月dd日')`: 03月17日
- `getTimeString('mm-dd')`: 03-17
- `getTimeString('mm/dd')`: 03/17
- `getTimeString('hh:mm:ss')`: 11:31:18
- `getTimeString('hh时:mm分:ss秒')`: 11时31分18秒

### rename
```
const { rename } = require('slimz');

rename('package.json','newName.json').then(()=>{
	//success
})

//you can use it by chain
rename('package.json','newName.json').then(()=>{
	//success
	return rename('oldFile','newFile')
}).then(()=>{
	return mkdir('./a')
})
...

```

### mkdir
```
const { mkdir } = require('slimz');

mkdir('./a').then(()=>{
	return mkdir('a/b')
}).then(()=>{

}).catch(err=>{
	console.log(err)
})
```

### exists
```
exists('package.json').then(data=>{
	console.log(data)
})
```


