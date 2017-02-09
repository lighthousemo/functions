function foo(){
    var bar;
    return bar();
    bar = function() {
        return 3;
    };
    var bar = function() {
        return 8;
    };
}
console.log(foo());

// // After hoisting
// function foo(){
//     var bar;
//     var bar;
//     return bar();
//     bar = function() {
//         return 3;
//     };
//     bar = function() {
//         return 8;
//     };
// }
