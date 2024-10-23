function generateTestCases() {
    const testCases = [];
    
    // Helper function to generate random string
    function generateRandomString(length) {
        const chars = 'abcdefghijklmnopqrstuvwxyz';
        return Array(length).fill().map(() => chars[Math.floor(Math.random() * chars.length)]).join('');
    }

    // Test cases
    testCases.push({ input: { haystack: "sadbutsad", needle: "sad" }, output: 0 });
    testCases.push({ input: { haystack: "leetcode", needle: "leeto" }, output: -1 });
    testCases.push({ input: { haystack: "hello", needle: "ll" }, output: 2 });
    testCases.push({ input: { haystack: "aaaaa", needle: "bba" }, output: -1 });
    testCases.push({ input: { haystack: "mississippi", needle: "issip" }, output: 4 });
    testCases.push({ input: { haystack: "a", needle: "a" }, output: 0 });
    testCases.push({ input: { haystack: "abc", needle: "" }, output: 0 });
    testCases.push({ input: { haystack: "", needle: "" }, output: 0 });
    testCases.push({ input: { haystack: "aaa", needle: "aaaa" }, output: -1 });
    testCases.push({ input: { haystack: "ababababab", needle: "abab" }, output: 0 });

    // Generate more random test cases
    for (let i = 0; i < 40; i++) {
        const haystackLength = Math.floor(Math.random() * 100) + 1;
        const needleLength = Math.floor(Math.random() * haystackLength) + 1;
        const haystack = generateRandomString(haystackLength);
        const needle = generateRandomString(needleLength);
        const output = haystack.indexOf(needle);
        testCases.push({ input: { haystack, needle }, output });
    }

    return testCases;
}

console.log(JSON.stringify(generateTestCases()));