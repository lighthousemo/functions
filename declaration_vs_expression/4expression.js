function foo(){
    return bar();
    var bar = function() {
        return 3;
    };
    var bar = function() {
        return 8;
    };
}
console.log(foo());


// function foo(){
//     var bar;
//     return bar();
//     bar = function() {
//         return 3;
//     };
//     bar = function() {
//         return 8;
//     };
// }
// console.log(foo());
