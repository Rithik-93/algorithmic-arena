function generateTestCases() {
    const testCases = [];

    // Helper function to create zigzag conversion
    function convert(s, numRows) {
        if (numRows === 1) return s;
        const rows = new Array(numRows).fill('');
        let currentRow = 0;
        let step = 1;

        for (const char of s) {
            rows[currentRow] += char;
            if (currentRow === 0) step = 1;
            if (currentRow === numRows - 1) step = -1;
            currentRow += step;
        }

        return rows.join('');
    }

    // Generate test cases
    const strings = [
        "PAYPALISHIRING",
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        "HelloWorld",
        "LeetCodeIsFun",
        "ZigzagConversion",
        "A",
        "AB",
        "ABC",
        "ABCD",
        "ABCDE",
        "123456789",
        "abcdefghijklmnopqrstuvwxyz",
        "ThisIsALongStringWithNoSpaces",
        "Short",
        "VeryVeryLongStringToTestTheLimits",
        "MixedCase123AndNumbers",
        "!@#$%^&*()_+-=[]{}|;:,.<>?",
        "RepeatedCharacterssssss",
        "AlternatingAaBbCcDdEeFf",
        "PalindromeRacecar"
    ];

    for (let i = 0; i < 50; i++) {
        const s = strings[i % strings.length];
        const numRows = Math.floor(Math.random() * 10) + 1;
        const output = convert(s, numRows);
        testCases.push({ input: { s, numRows }, output });
    }

    return testCases;
}

console.log(JSON.stringify(generateTestCases()));