
// Create a function that takes 2 positive integers in form of a string as an input, and outputs the sum (also as a string):

function sumStr(a,b) {
    return ((a ? parseInt(a) : 0)  +  (b ? parseInt(b) : 0)).toString()
}