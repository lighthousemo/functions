function foo(){ // <--- function declaration
    var bar = function() { // <--- function expression
        return 3;
    };
    return bar();
    var bar = function() {
        return 8;
    };
}
console.log(foo());

// function foo(){ // <--- function declaration
//     var bar;
//     var bar;
//     bar = function() { // <--- function expression
//         return 3;
//     };
//     return bar();
//     bar = function() {
//         return 8;
//     };
// }
// console.log(foo());
