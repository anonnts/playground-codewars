// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'

function solution(str){
    let text = ''
    
    if (str.length > 1) {
      for(let i = str.length - 1; i >= 0;  i--) {
        text += str[i]
      }
    return text
    }
    return str
}