var add=(a,b)=>a+b;
let arry=[1,2,4,2,4,0];
let a= [...new Set(arry)];
console.log(a);

var obj={...{name:"wanglimei"},...{age:"7"}};
console.log(obj);
//引入css文件
import './test.css';//引入css
import './style.less';//引入less
