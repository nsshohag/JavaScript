import {text} from './77-module-export.js'
console.log("Imported "+text);

import {func} from './77-module-export.js'
func();


import {CSE} from './77-module-export.js'
let s1=new CSE("Sadat",2018331099);
console.log(s1);
console.log(s1.name,s1.reg);