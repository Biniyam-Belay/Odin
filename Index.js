const greet = function(){
    alert("Hello");
};
// The above function is of the type EXPRESSION.

// Below is a function of the type DECLARATION.
function greet() {
    alert("Hello");
};

// The main difference between the two is :- 
// We can call function declaration before its declaration. BUT we cant call or access function expression before declarion.