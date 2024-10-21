function generateTestCases() {
    const testCases = [];

    // Basic test cases
    testCases.push({ input: [1, 2, 3, 4, 5], output: 9 });
    testCases.push({ input: [2, 3, 4, 5, 1, 100], output: 105 });
    testCases.push({ input: [1, 1], output: 2 });
    testCases.push({ input: [0, 0], output: 0 });
    testCases.push({ input: [-1, -2], output: -3 });

    // Large numbers
    testCases.push({ input: [1000000, 999999], output: 1999999 });
    testCases.push({ input: [2147483647, 2147483646], output: 4294967293 });

    // Negative numbers
    testCases.push({ input: [-5, -2, -8, -1], output: -3 });
    testCases.push({ input: [-100, -200, -300, -150], output: -250 });

    // Mix of positive and negative numbers
    testCases.push({ input: [-1, 2, -3, 4, -5], output: 6 });
    testCases.push({ input: [10, -5, 7, -3, 2, -1], output: 17 });

    // Duplicate numbers
    testCases.push({ input: [5, 5, 5, 5], output: 10 });
    testCases.push({ input: [1, 1, 1, 2, 2, 2], output: 4 });

    // Single element
    testCases.push({ input: [42], output: 42 });

    // Long array
    testCases.push({ input: Array.from({ length: 1000 }, (_, i) => i + 1), output: 1999 });

    // Random arrays
    for (let i = 0; i < 35; i++) {
        const length = Math.floor(Math.random() * 100) + 2;
        const arr = Array.from({ length }, () => Math.floor(Math.random() * 2001) - 1000);
        const maxSum = arr.reduce((max, num, index) => {
            for (let j = index + 1; j < arr.length; j++) {
                max = Math.max(max, num + arr[j]);
            }
            return max;
        }, -Infinity);
        testCases.push({ input: arr, output: maxSum });
    }

    return testCases;
}

console.log(JSON.stringify(generateTestCases()));