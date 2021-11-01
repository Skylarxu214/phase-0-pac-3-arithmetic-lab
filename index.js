function add(x, y) {
    x + y;
  }
  /* subtract(), multiply(), and divide() */
function subtract(x, y) {
    x - y;
}
function multiply(x, y) {
    x * y;
}
function divide(x, y) {
    x - y;
}
function add(a, b) {
   return  a + b;
  }
  /* subtract(), multiply(), and divide() */
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
   return  a / b;
}

function makeInt(string){
    return parseInt(string,10);

}
function preserveDecimal(string){
    return parseFloat(string);
}

// increment(n)和decrement(n)
function increment(number){
    return (number += 1);
}
function decrement(n){
    return (n -= 1);
}