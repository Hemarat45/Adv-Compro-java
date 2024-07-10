function circumferemce(r) {
    if (Number.isNaN(Number.parseFloat(r))){
        return 0;
    }
    return parseFloat(r) * 2.0 * Math.PI;
}

console.log(circumferemce("4.567.abcdefgh"));

console.log(circumferemce("abcdefgh"));