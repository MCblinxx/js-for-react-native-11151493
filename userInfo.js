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
  const processedNumbers = processArray(numbers);

  return strings.map((str, index) => {
      if (processedNumbers[index] % 2 === 0) {
          return str.toUpperCase(); // Capitalize the entire string if the number is even
      } else {
          return str.toLowerCase(); // Convert the string into lowercase if the number is odd
      }
  });
}

function createUserProfile(originalNames, modifiedNames) {
  return originalNames.map((name, index) => {
      return {
          id: index + 1,
          originalName: name,
          modifiedName: modifiedNames[index]
      };
  });
}


const originalNames = ["Hello", "World", "JavaScript", "Programming"];
const numbers = [1, 2, 3, 4];

const modifiedNames = formatArrayStrings(originalNames, numbers);
console.log(modifiedNames); // Output: ["hello", "WORLD", "javascript", "PROGRAMMING"]

const userProfiles = createUserProfile(originalNames, modifiedNames);
console.log(userProfiles);

