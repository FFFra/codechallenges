/*
/Reverse String
*/

let reverseStringWithArray = str => {
    let reversed = []
    let counter = str.length
    for(i = 0; i < str.length; i++){
      reversed.push(str[--counter])
    }
    return reversed.join('')
}

//uncomment to call this method
//reverseStringWithArray('smth')

function reverseString(str) {
    reversed = ''
    for(i = str.length - 1; i >= 0; i--) {
      debugger
      reversed += str[i] 
    }
    return reversed
}

//uncomment to call this method
//reverseString('smth')

function reverseStringTwo(str) {
  reversed = ''
  for(let char of str) {
    reversed = char + reversed
  }
  return reversed
}

//uncomment to call this method
//reverseStringTwo('string')
