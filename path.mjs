import path from "path";

const file = "C/laragon/www/learn-nodejs/example.txt";

console.info(path.sep);
console.info(path.dirname(file));
console.info(path.basename(file));
console.info(path.extname(file));
console.info(path.parse(file)); 