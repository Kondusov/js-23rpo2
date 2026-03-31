const user = { name: "Ivan", age: 30 };
console.log(user.name);// Ivan
const jsonString = JSON.stringify(user); // '{"name":"Ivan","age":30}'
console.log(jsonString.name);// undefined
const new_user = JSON.parse(jsonString); // { name: "Ivan", age: 30 }
console.log(new_user.name);// Ivan

