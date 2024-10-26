function generateTestCases() {
    const testCases = [];

    // Helper function to calculate minimum insertions
    function minInsertions(s) {
        const n = s.length;
        const dp = Array(n).fill().map(() => Array(n).fill(0));

        for (let len = 2; len <= n; len++) {
            for (let i = 0; i < n - len + 1; i++) {
                let j = i + len - 1;
                if (s[i] === s[j] && len === 2) {
                    dp[i][j] = 0;
                } else if (s[i] === s[j]) {
                    dp[i][j] = dp[i + 1][j - 1];
                } else {
                    dp[i][j] = Math.min(dp[i + 1][j], dp[i][j - 1]) + 1;
                }
            }
        }

        return dp[0][n - 1];
    }

    // Test cases
    testCases.push({ input: "zzazz", output: 0 });
    testCases.push({ input: "mbadm", output: 2 });
    testCases.push({ input: "leetcode", output: 5 });
    testCases.push({ input: "a", output: 0 });
    testCases.push({ input: "ab", output: 1 });
    testCases.push({ input: "abc", output: 2 });
    testCases.push({ input: "abcd", output: 3 });
    testCases.push({ input: "abcde", output: 4 });
    testCases.push({ input: "racecar", output: 0 });
    testCases.push({ input: "amanaplanacanalpanama", output: 0 });
    testCases.push({ input: "abcba", output: 0 });
    testCases.push({ input: "abcde", output: 4 });
    testCases.push({ input: "abababa", output: 0 });
    testCases.push({ input: "anagram", output: 3 });
    testCases.push({ input: "palindrome", output: 7 });
    testCases.push({ input: "insertion", output: 6 });
    testCases.push({ input: "abcdefghijklmnopqrstuvwxyz", output: 25 });
    testCases.push({ input: "zyxwvutsrqponmlkjihgfedcba", output: 25 });
    testCases.push({ input: "aaaaabbbbbcccccdddddeeeee", output: 20 });
    testCases.push({ input: "abcdefgfedcba", output: 0 });

    // Generate more random test cases
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < 30; i++) {
        let length = Math.floor(Math.random() * 500) + 1;
        let s = '';
        for (let j = 0; j < length; j++) {
            s += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        testCases.push({ input: s, output: minInsertions(s) });
    }

    return testCases;
}

console.log(JSON.stringify(generateTestCases()));