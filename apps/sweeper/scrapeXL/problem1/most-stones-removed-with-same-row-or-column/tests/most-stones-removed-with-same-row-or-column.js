function generateTestCases() {
  const testCases = [];

  // Helper function to generate random integer
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Helper function to remove duplicates from an array of arrays
  function removeDuplicates(arr) {
    return Array.from(new Set(arr.map(JSON.stringify)), JSON.parse);
  }

  // Generate test cases
  for (let i = 0; i < 50; i++) {
    let n = getRandomInt(1, 1000);
    let stones = [];

    for (let j = 0; j < n; j++) {
      stones.push([getRandomInt(0, 10000), getRandomInt(0, 10000)]);
    }

    // Remove duplicates
    stones = removeDuplicates(stones);

    // Calculate the expected output
    const rows = new Set();
    const cols = new Set();
    for (const [x, y] of stones) {
      rows.add(x);
      cols.add(y);
    }
    const output = stones.length - Math.max(rows.size, cols.size);

    testCases.push({
      input: stones,
      output: output
    });
  }

  return testCases;
}

console.log(JSON.stringify(generateTestCases()));