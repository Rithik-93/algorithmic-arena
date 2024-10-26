function generateTestCases() {
  const testCases = [];

  // Helper function to generate a random integer within a range
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Helper function to generate a random triangle
  function generateTriangle(rows) {
    const triangle = [];
    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j <= i; j++) {
        row.push(getRandomInt(-104, 104));
      }
      triangle.push(row);
    }
    return triangle;
  }

  // Helper function to calculate the minimum path sum
  function calculateMinPathSum(triangle) {
    const n = triangle.length;
    const dp = triangle[n - 1].slice();

    for (let i = n - 2; i >= 0; i--) {
      for (let j = 0; j <= i; j++) {
        dp[j] = triangle[i][j] + Math.min(dp[j], dp[j + 1]);
      }
    }

    return dp[0];
  }

  // Generate test cases
  for (let i = 0; i < 50; i++) {
    const rows = getRandomInt(1, 200);
    const triangle = generateTriangle(rows);
    const minPathSum = calculateMinPathSum(triangle);

    testCases.push({
      input: JSON.stringify(triangle),
      output: minPathSum
    });
  }

  return JSON.stringify(testCases);
}

console.log(generateTestCases());