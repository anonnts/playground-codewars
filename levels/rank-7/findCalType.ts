// You have to create a function calcType, which receives 3 arguments: 2 numbers, and the result of an unknown operation performed on them (also a number).

// Based on those 3 values you have to return a string, that describes which operation was used to get the given result.

// The possible return strings are: "addition", "subtraction", "multiplication", "division".

function calcType(a, b, res) {
  
    let r = '';
    let index = 0;
    while (true) {
      if (index === 0){
       const t = (a + b) === res ? true : false
       r = t ? 'addition' : r
      }
      
      if (index === 1) {
         const t = (a * b) === res ? true : false
         r = t ? 'multiplication' : r
      }
      
      if (index === 2) {
        const t = (a - b) === res ? true : false
         r = t ? 'subtraction' : r
      }
      
       if (index === 3) {
        const t = (a / b) === res ? true : false
         r = t ? 'division' : r
      }
      
      if (index > 3){
        break;
      }
      
      index++
      
    }
    return r
  }