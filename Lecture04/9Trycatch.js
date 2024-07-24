function criticalColde(){
    throw "thowing an exception"
}

function logError(theException) {
    console.log(x)
}


console.log("\n*****************Try..Catch***********\n")



try{
    criticalColde();
}catch (ex){
    console.log('Got an error');
    logError(ex);
}


console.log("\n*****************Throwing in Try..Catch***********\n")


try{
    throw "An exeption that is throw every time"
} catch(ex){
    console.log("Got an error");
    logError(ex);
}



console.log("\n*****************Try Catch finally***********\n");

try{
    criticalColde();
}catch(ex) {
    console.log("Got an error");
    logError(ex);
}finally{
    console.log("Code that always will run");
}
function hello(){
    console.log("\n*****************Throwing Exception***********\n");
}

