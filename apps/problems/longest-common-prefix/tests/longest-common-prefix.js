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

    // Helper function to find longest common prefix
    function longestCommonPrefix(strs) {
        if (strs.length === 0) return "";
        let prefix = strs[0];
        for (let i = 1; i < strs.length; i++) {
            while (strs[i].indexOf(prefix) !== 0) {
                prefix = prefix.substring(0, prefix.length - 1);
                if (prefix === "") return "";
            }
        }
        return prefix;
    }

    // Generate test cases
    for (let i = 0; i < 50; i++) {
        const arrayLength = Math.floor(Math.random() * 10) + 1; // 1 to 10 strings
        const strs = [];
        const prefixLength = Math.floor(Math.random() * 5); // 0 to 4 characters prefix
        const prefix = generateRandomString(prefixLength);

        for (let j = 0; j < arrayLength; j++) {
            const suffixLength = Math.floor(Math.random() * 10); // 0 to 9 characters suffix
            strs.push(prefix + generateRandomString(suffixLength));
        }

        testCases.push({
            input: JSON.stringify(strs),
            output: JSON.stringify(longestCommonPrefix(strs))
        });
    }

    return JSON.stringify(testCases);
}

console.log(generateTestCases());