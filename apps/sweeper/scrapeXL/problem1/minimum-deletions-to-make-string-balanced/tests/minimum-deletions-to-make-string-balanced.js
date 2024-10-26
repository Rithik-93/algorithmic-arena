function generateTestCases() {
    const testCases = [];

    function generateRandomString(length) {
        let result = '';
        for (let i = 0; i < length; i++) {
            result += Math.random() < 0.5 ? 'a' : 'b';
        }
        return result;
    }

    function minDeletions(s) {
        let bCount = 0;
        let deletions = 0;
        
        for (let i = 0; i < s.length; i++) {
            if (s[i] === 'b') {
                bCount++;
            } else {
                if (bCount > 0) {
                    deletions = Math.min(deletions + 1, bCount);
                }
            }
        }
        
        return deletions;
    }

    // Edge cases
    testCases.push({ input: "a", output: 0 });
    testCases.push({ input: "b", output: 0 });
    testCases.push({ input: "ab", output: 0 });
    testCases.push({ input: "ba", output: 1 });
    testCases.push({ input: "aababbab", output: 2 });
    testCases.push({ input: "bbaaaaabb", output: 2 });

    // Random test cases
    for (let i = 0; i < 44; i++) {
        const length = Math.floor(Math.random() * 105) + 1;
        const input = generateRandomString(length);
        const output = minDeletions(input);
        testCases.push({ input, output });
    }

    return testCases;
}

console.log(JSON.stringify(generateTestCases()));