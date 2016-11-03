// function declaration
function foo(){
    function bar1() { // <--- declaration (will be hoisted)
        return 3;
    }
    return bar2(); // <-- regular line of code (stays in place)
    function bar2() {  // <--- declaration (will be hoisted)
        return 8;
    }
}

// After hoisting, the function looks like this:
// function foo(){
//     function bar1() { // <--- declaration (will be hoisted)
//         return 3;
//     }
//     function bar2() {  // <--- declaration (will be hoisted)
//         return 8;
//     }
//     return bar(); // <-- regular line of code (stays in place)

// }


console.log(foo());
