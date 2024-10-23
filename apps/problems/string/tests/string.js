function generateTestCases() {
    const testCases = [];

    // Helper function to generate random string
    function generateRandomString(length) {
        const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }

    // Helper function to find the longest substring without repeating characters
    function longestSubstringWithoutRepeating(s) {
        let maxLength = 0;
        let start = 0;
        const charMap = new Map();

        for (let end = 0; end < s.length; end++) {
            if (charMap.has(s[end])) {
                start = Math.max(charMap.get(s[end]) + 1, start);
            }
            charMap.set(s[end], end);
            maxLength = Math.max(maxLength, end - start + 1);
        }

        return maxLength;
    }

    // Generate test cases
    testCases.push({ input: "abcabcbb", output: 3 });
    testCases.push({ input: "bbbbb", output: 1 });
    testCases.push({ input: "pwwkew", output: 3 });
    testCases.push({ input: "", output: 0 });
    testCases.push({ input: "a", output: 1 });
    testCases.push({ input: "au", output: 2 });
    testCases.push({ input: "aab", output: 2 });
    testCases.push({ input: "dvdf", output: 3 });
    testCases.push({ input: "tmmzuxt", output: 5 });
    testCases.push({ input: "abcdefghijklmnopqrstuvwxyz", output: 26 });

    // Generate random test cases
    for (let i = 0; i < 40; i++) {
        const length = Math.floor(Math.random() * 100) + 1; // Random length between 1 and 100
        const input = generateRandomString(length);
        const output = longestSubstringWithoutRepeating(input);
        testCases.push({ input, output });
    }

    return testCases;
}

console.log(JSON.stringify(generateTestCases()));