function foo(){
    function bar() {
        return 3;
    }
    return bar();
    function bar() {
        return 8;
    }
}
console.log(foo());

// Hoisting
// After hoisting the code looks like this:
// Rule: Function declarations get hoisted (lifted above 'regular' code)
function foo(){
    function bar() {
        return 3;
    }
    function bar() {
        return 8;
    }
    return bar();
}
console.log(foo());
