function processArray(arr) {
  return arr.map(num => {
      if (num % 2 === 0) {
          return num * num; // Square even numbers
      } else {
          return num * 3;   // Triple odd numbers
      }
  });
}

function formatArrayStrings(strings, numbers) {
  // Process the numbers array using processArray function
  const processedNumbers = processArray(numbers);

  // Modify the strings based on the corresponding processed numbers
  return strings.map((str, index) => {
      if (processedNumbers[index] % 2 === 0) {
          return str.toUpperCase(); // Capitalize the entire string if the number is even
      } else {
          return str.toLowerCase(); // Convert the string into lowercase if the number is odd
      }
  });
}
const strings = ["Hello", "World", "JavaScript", "Programming"];
const numbers = [1, 2, 3, 4];

const processedNumbers = processArray(numbers);
console.log(processedNumbers); // Output: [3, 4, 9, 16]

const formattedStrings = formatArrayStrings(strings, numbers);
console.log(formattedStrings);