function generateTestCases() {
    const testCases = [];

    // Helper function to check if a string is a palindrome
    function isPalindrome(str) {
        return str === str.split('').reverse().join('');
    }

    // Helper function to generate random string
    function generateRandomString(length) {
        const characters = 'abcdefghijklmnopqrstuvwxyz';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }

    // Function to calculate minimum cuts
    function minCut(s) {
        const n = s.length;
        const dp = new Array(n).fill(0);
        const isPal = Array.from({ length: n }, () => new Array(n).fill(false));

        for (let i = 0; i < n; i++) {
            let minCuts = i;
            for (let j = 0; j <= i; j++) {
                if (s[i] === s[j] && (i - j <= 2 || isPal[j + 1][i - 1])) {
                    isPal[j][i] = true;
                    minCuts = j === 0 ? 0 : Math.min(minCuts, dp[j - 1] + 1);
                }
            }
            dp[i] = minCuts;
        }

        return dp[n - 1];
    }

    // Generate test cases
    testCases.push({ input: "aab", output: 1 });
    testCases.push({ input: "a", output: 0 });
    testCases.push({ input: "ab", output: 1 });

    // Generate palindromes
    testCases.push({ input: "aba", output: 0 });
    testCases.push({ input: "abba", output: 0 });
    testCases.push({ input: "racecar", output: 0 });

    // Generate strings with multiple palindromes
    testCases.push({ input: "aabaa", output: 1 });
    testCases.push({ input: "abacaba", output: 0 });
    testCases.push({ input: "abababababa", output: 0 });

    // Generate strings with no palindromes longer than 1
    testCases.push({ input: "abcde", output: 4 });
    testCases.push({ input: "zyxwvutsrqponmlkjihgfedcba", output: 25 });

    // Generate random strings of various lengths
    for (let i = 0; i < 39; i++) {
        const length = Math.floor(Math.random() * 2000) + 1;
        const randomString = generateRandomString(length);
        testCases.push({ input: randomString, output: minCut(randomString) });
    }

    return testCases;
}

console.log(JSON.stringify(generateTestCases()));