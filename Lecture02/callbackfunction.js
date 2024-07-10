function crateQuote(quote, callback){
    let myQuote = 'Like I alwats say,' + quote;
    callback(myQuote);
}

function logQuote(quote) {
    console.log(quote + ' Yes..');
}

crateQuote(" you will getting better!", logQuote);