
 STUDENT ID:11151493

# User Profile Processing

This project includes three JavaScript functions: `processArray`, `formatArrayStrings`, and `createUserProfile`. These functions transform arrays of numbers and strings, creating user profile objects.

## Functions

### 1. `processArray`
Transforms an array of numbers by squaring even numbers and tripling odd numbers.

**Parameters:**
- `arr` (Array): Array of numbers.

**Returns:**
- Array with transformed numbers.

**Example:**
```javascript
processArray([1, 2, 3, 4]); // Output: [3, 4, 9, 16]
```

### 2. `formatArrayStrings`
Modifies an array of strings based on corresponding processed numbers. Strings are capitalized if the number is even, and lowercased if odd.

**Parameters:**
- `strings` (Array): Array of strings.
- `numbers` (Array): Array of numbers.

**Returns:**
- Array of modified strings.

**Example:**
```javascript
formatArrayStrings(["Hello", "World"], [1, 2]); // Output: ["hello", "WORLD"]
```

### 3. `createUserProfile`
Creates user profile objects containing `originalName`, `modifiedName`, and `id`.

**Parameters:**
- `originalNames` (Array): Array of original names.
- `modifiedNames` (Array): Array of modified names.

**Returns:**
- Array of user profile objects.

**Example:**
```javascript
createUserProfile(["Hello", "World"], ["hello", "WORLD"]);
// Output: [
//   { id: 1, originalName: "Hello", modifiedName: "hello" },
//   { id: 2, originalName: "World", modifiedName: "WORLD" }
// ]
```

## Complete Code
```javascript
function processArray(arr) {
    return arr.map(num => (num % 2 === 0 ? num * num : num * 3));
}

function formatArrayStrings(strings, numbers) {
    const processedNumbers = processArray(numbers);
    return strings.map((str, index) => 
        (processedNumbers[index] % 2 === 0 ? str.toUpperCase() : str.toLowerCase()));
}

function createUserProfile(originalNames, modifiedNames) {
    return originalNames.map((name, index) => ({
        id: index + 1,
        originalName: name,
        modifiedName: modifiedNames[index]
    }));
}

// Example usage:
const originalNames = ["Hello", "World"];
const numbers = [1, 2];
const modifiedNames = formatArrayStrings(originalNames, numbers);
const userProfiles = createUserProfile(originalNames, modifiedNames);
console.log(userProfiles);
```

This project processes arrays of numbers and strings, transforming and combining them into user profile objects.
