const names = ['A', 'B', 'Boy'];


console.log('while loop');
let index = 0;
while (index < names.length) {
    console.log(names[index]);
    index += 1;
}

console.log('for loop');
for (let index = 0; index < names.length; index++) {
    console.log(names[index]);
}

console.log('for of');
for (let name of names) {
    console.log(name);
}
