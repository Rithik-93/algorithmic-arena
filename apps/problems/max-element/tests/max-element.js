function generateTestCases() {
    const testCases = [];

    // Test case 1: Basic ascending array
    testCases.push({ input: [1, 2, 3, 4, 5], output: 5 });

    // Test case 2: Basic descending array
    testCases.push({ input: [5, 4, 3, 2, 1], output: 5 });

    // Test case 3: Array with duplicate max value
    testCases.push({ input: [1, 5, 3, 5, 2], output: 5 });

    // Test case 4: Array with negative numbers
    testCases.push({ input: [-5, -2, -8, -1], output: -1 });

    // Test case 5: Array with mixed positive and negative numbers
    testCases.push({ input: [-3, 0, 5, -1, 2], output: 5 });

    // Test case 6: Array with all same numbers
    testCases.push({ input: [7, 7, 7, 7, 7], output: 7 });

    // Test case 7: Array with one element
    testCases.push({ input: [42], output: 42 });

    // Test case 8: Array with very large numbers
    testCases.push({ input: [1000000, 2000000, 3000000], output: 3000000 });

    // Test case 9: Array with very small numbers
    testCases.push({ input: [0.001, 0.002, 0.003], output: 0.003 });

    // Test case 10: Array with zero
    testCases.push({ input: [0, -1, -2, 1, 2], output: 2 });

    // Generate 40 more random test cases
    for (let i = 0; i < 40; i++) {
        const length = Math.floor(Math.random() * 20) + 1; // Random length between 1 and 20
        const arr = [];
        for (let j = 0; j < length; j++) {
            arr.push(Math.floor(Math.random() * 2001) - 1000); // Random numbers between -1000 and 1000
        }
        const max = Math.max(...arr);
        testCases.push({ input: arr, output: max });
    }

    return testCases;
}

console.log(JSON.stringify(generateTestCases()));