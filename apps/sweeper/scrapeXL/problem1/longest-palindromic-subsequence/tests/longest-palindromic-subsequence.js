function generateTestCases() {
    const testCases = [];

    // Helper function to generate random string
    function generateRandomString(length) {
        const characters = 'abcdefghijklmnopqrstuvwxyz';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }

    // Helper function to calculate longest palindromic subsequence length
    function longestPalindromeSubseq(s) {
        const n = s.length;
        const dp = Array(n).fill().map(() => Array(n).fill(0));

        for (let i = n - 1; i >= 0; i--) {
            dp[i][i] = 1;
            for (let j = i + 1; j < n; j++) {
                if (s[i] === s[j]) {
                    dp[i][j] = dp[i + 1][j - 1] + 2;
                } else {
                    dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
                }
            }
        }

        return dp[0][n - 1];
    }

    // Generate test cases
    testCases.push({ input: "bbbab", output: 4 });
    testCases.push({ input: "cbbd", output: 2 });

    // Edge cases
    testCases.push({ input: "a", output: 1 });
    testCases.push({ input: "aa", output: 2 });
    testCases.push({ input: "ab", output: 1 });

    // Random test cases
    for (let i = 0; i < 45; i++) {
        const length = Math.floor(Math.random() * 1000) + 1;
        const input = generateRandomString(length);
        const output = longestPalindromeSubseq(input);
        testCases.push({ input, output });
    }

    return testCases;
}

console.log(JSON.stringify(generateTestCases()));