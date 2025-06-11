// Immediately Invoked Function Expression (IIFE)


(function chai(){
    //named IIFE
    console.log(`Db connected`);
    
})();

((name) => {
    //Unnamed IIFE
    console.log(`Db connected Two ${name}`);
    
})("yash")