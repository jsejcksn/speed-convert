var speedConvert = require('../index.js');

console.log(speedConvert.convert(12, 'm', 's', 'cm', 'm')); // 72000
console.log(speedConvert.convert(12, 'm', 's', 'cm', 'm', true)); // [ 12, 'm', 's', 72000, 'cm', 'm' ]
console.log(speedConvert.convertLength(3, 'm', 'km')); // 0.003
console.log(speedConvert.convertLength(3, 'm', 'km', true)); // [ 3, 'm', 0.003, 'km' ]
console.log(speedConvert.convertToString(3, 'm', 'km', 'length', true)); // 3 m = 0.003 km
console.log(speedConvert.convertTime(30, 'm', 's')); // 1800
console.log(speedConvert.convertTime(30, 'm', 's', true)); // [ 30, 'm', 1800, 's' ]
console.log(speedConvert.convertToString(30, 'm', 's', 'time', true)); // 30 m = 1800 s
