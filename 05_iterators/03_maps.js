const map = new Map();
map.set('IN', 'INDIA');
map.set('USA', 'UNITED STATES OF AMERICA');
map.set('UK', 'UNITED KINGDOM');
map.set('FR', 'FRANCE');

// map.forEach((full, code) => console.log(code, '=>', full));

console.log('set' in map);  // true
console.log('get' in map);  // true

console.log(Object.getOwnPropertyNames(map));   // []
console.log(Object.getOwnPropertyNames(Map));   // [ 'length', 'name', 'prototype' ]
    console.log(Map.name);
    console.log(Map.length);
    console.log(Map.prototype)














