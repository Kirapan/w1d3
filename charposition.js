var input = process.argv[2];

function charPosition(input) {
  var result = {};
  input = input.split(' ').join('').split('');
  for (var i = 0; i < input.length; i++) {
    var keys = input[i];
    if (result[keys] === undefined) {
      result[keys] = [i];
    } else {
      result[keys].push(i);
    }
  } return result;
}
console.log(charPosition(input));