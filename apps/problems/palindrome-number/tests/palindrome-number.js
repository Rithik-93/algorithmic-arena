function generateTestCases() {
    const testCases = [];
    
    // Positive palindromes
    testCases.push({ input: 121, output: true });
    testCases.push({ input: 11, output: true });
    testCases.push({ input: 1001, output: true });
    testCases.push({ input: 12321, output: true });
    testCases.push({ input: 1234321, output: true });
    
    // Non-palindromes
    testCases.push({ input: 123, output: false });
    testCases.push({ input: 1000, output: false });
    testCases.push({ input: 12345, output: false });
    testCases.push({ input: 10011, output: false });
    
    // Negative numbers
    testCases.push({ input: -121, output: false });
    testCases.push({ input: -11, output: false });
    testCases.push({ input: -1001, output: false });
    
    // Single digit numbers
    testCases.push({ input: 0, output: true });
    testCases.push({ input: 1, output: true });
    testCases.push({ input: 9, output: true });
    
    // Large palindromes
    testCases.push({ input: 1234554321, output: true });
    testCases.push({ input: 9876543210123456789, output: true });
    
    // Large non-palindromes
    testCases.push({ input: 1234567890, output: false });
    testCases.push({ input: 9876543210, output: false });
    
    // Edge cases
    testCases.push({ input: 10, output: false });
    testCases.push({ input: 100, output: false });
    testCases.push({ input: 1000000001, output: true });
    
    // Random numbers
    for (let i = 0; i < 28; i++) {
        const num = Math.floor(Math.random() * 2000000000) - 1000000000;
        const isPalindrome = num.toString() === num.toString().split('').reverse().join('') && num >= 0;
        testCases.push({ input: num, output: isPalindrome });
    }
    
    return testCases;
}

console.log(JSON.stringify(generateTestCases()));