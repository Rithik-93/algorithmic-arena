function generateTestCases() {
    const testCases = [];
    const INT_MAX = Math.pow(2, 31) - 1;
    const INT_MIN = -Math.pow(2, 31);

    // Function to reverse an integer
    function reverseInteger(x) {
        const sign = x < 0 ? -1 : 1;
        x = Math.abs(x);
        let reversed = 0;
        while (x > 0) {
            reversed = reversed * 10 + (x % 10);
            x = Math.floor(x / 10);
        }
        return reversed > INT_MAX ? 0 : sign * reversed;
    }

    // Generate test cases
    testCases.push({ input: 123, output: 321 });
    testCases.push({ input: -123, output: -321 });
    testCases.push({ input: 120, output: 21 });
    testCases.push({ input: 0, output: 0 });
    testCases.push({ input: 1, output: 1 });
    testCases.push({ input: -1, output: -1 });
    testCases.push({ input: 1534236469, output: 0 });
    testCases.push({ input: -2147483648, output: 0 });
    testCases.push({ input: 2147483647, output: 0 });

    // Generate random test cases
    for (let i = 0; i < 41; i++) {
        const randomNum = Math.floor(Math.random() * (INT_MAX * 2)) - INT_MAX;
        testCases.push({ input: randomNum, output: reverseInteger(randomNum) });
    }

    return testCases;
}

console.log(JSON.stringify(generateTestCases()));