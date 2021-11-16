function findShortestString(arr) {
  let strLengths = arr.map(str => str.length);
  const min = Math.min(...strLengths);

  for (i = 0; i < arr.length; i++) {
    if (arr[i].length === min) {
      return arr[i];
    }
  }

}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestString(['flower', 'juniper', 'lily', 'dadelion']));

  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['a']));

  // BENCHMARK HERE
}

module.exports = findShortestString;

// Please add your pseudocode to this file

// 1. make an array of string lengths using map().
// 2. find the lowest number using Math.min().
// 3. iterate over arr and if the length of the string is equal to lowest number return that string.

// And a written explanation of your solution
