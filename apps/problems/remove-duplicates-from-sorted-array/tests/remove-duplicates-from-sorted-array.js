function generateTestCases() {
  const testCases = [];

  for (let i = 0; i < 50; i++) {
    const length = Math.floor(Math.random() * 30) + 1;
    const nums = [];
    let current = Math.floor(Math.random() * 100) - 50;

    for (let j = 0; j < length; j++) {
      nums.push(current);
      if (Math.random() < 0.7) {
        current += Math.floor(Math.random() * 3) + 1;
      }
    }

    const uniqueNums = [...new Set(nums)];
    const k = uniqueNums.length;

    testCases.push({
      input: nums,
      output: k
    });
  }

  return testCases;
}

console.log(JSON.stringify(generateTestCases()));