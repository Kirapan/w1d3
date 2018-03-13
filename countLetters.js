function countLetters(input) {
  var result = {};
  input = input.split(' ').join('').split('');
  for (var i = 0; i < input.length; i++) {
    result[input[i]] = result[input[i]]? result[input[i]] + 1 : 1;
  } return result;
}
console.log(countLetters("lighthouse in the house"));