// Immediatly Invoked Function Expressions (IIFE)

(function user() {
    console.log("Sql query");  // named IIFE
    
})();

// () ()  ; 
( () => {
    console.log("mySql")   // un named IIFE
})();

( (name) => {
    console.log(`mySql ${name}`);
    
})('aman')
