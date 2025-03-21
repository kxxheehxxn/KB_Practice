// import { name, age, greet } from './modules/01_named_export.js';

// console.log(name, age);
// console.log(greet());

//별칭
// import {
//   name as userName,
//   age as userAge,
//   greet as GR,
// } from './modules/01_named_export.js';

// console.log(userName, userAge);
// console.log(GR());

// 전부 가저오기
// import * as utils from './modules/01_named_export.js';

// console.log(utils.age);
// console.log(utils.name);
// console.log(utils.greet());

//default - export
// import addFunction from './modules/02_default_export.js';

// console.log(addFunction(4, 5));

import { name, age, greet } from './modules/03_exports.js';

console.log(name, age);
console.log(greet());
