// functional expression
function foo(){ // <--- declaration
    var bar = function bar() { // <--- expression (the var is hoisted)
        return 3;
    };
    return bar();
    var bar = function bar() { // <--- expression (the var is hoisted)
        return 8;
    };
}
console.log(foo());


// // after hoisting the code looks like this:
// function foo(){ // <--- declaration 
//     var bar;
//     bar = function() { // <--- expression
//         return 3;
//     };
//     return bar();
//     bar = function() { // <--- expression
//         return 8;
//     };
// }

