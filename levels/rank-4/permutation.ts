// In this kata you have to create all permutations of an input string and remove duplicates,
// if present. This means, you have to shuffle all letters from the input in all possible orders.

// Examples:

// permutations('a'); // ['a']
// permutations('ab'); // ['ab', 'ba']
// permutations('aabb'); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
// The order of the permutations doesn't matter.

function permutations (string) {
    let subset = new Set()
    let arrString = string.split("")
    if (string.length <= 1) {
      return [string]
    }
    
    const swap = (a, b , arr) => {
      const temp = arr[a];
      arr[a] = arr[b];
      arr[b] = temp;
    }
     
    const generate = (arr, length) => {
    
     
     if (length === 1) {
      let txt = ''
      for(let index = 0; index < arr.length; index++) {
        txt += arr[index];
      }
      subset.add(txt)
      return;
     }
     
     generate(arr, length -1)
     for (let index = 0; index < arr.length -1; index++) {
      if (length % 2 === 0) {
           swap(index, length -1, arr); 
          } else {
           swap(0, length -1, arr)
        }
      generate(arr, length -1)
     }
    
    }
    
    generate(arrString, arrString.length)
    return [...subset]
  }