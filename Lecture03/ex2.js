let furniture = ['Table', 'Chairs', 'Couch'];


furniture.forEach((furniture) => {
    let iterator = furniture[Symbol.iterator]();
    while (true) {
        let result = iterator.next();
        if (result.done) break;
        console.log(result.value);
    }

 })