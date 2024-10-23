function generateTestCases() {
    const romanNumerals = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
    const values = [1, 5, 10, 50, 100, 500, 1000];
    const testCases = [];

    function romanToInt(s) {
        const romanMap = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 };
        let result = 0;
        for (let i = 0; i < s.length; i++) {
            if (i > 0 && romanMap[s[i]] > romanMap[s[i - 1]]) {
                result += romanMap[s[i]] - 2 * romanMap[s[i - 1]];
            } else {
                result += romanMap[s[i]];
            }
        }
        return result;
    }

    function intToRoman(num) {
        const romanSymbols = [
            ['M', 1000], ['CM', 900], ['D', 500], ['CD', 400], ['C', 100], ['XC', 90],
            ['L', 50], ['XL', 40], ['X', 10], ['IX', 9], ['V', 5], ['IV', 4], ['I', 1]
        ];
        let result = '';
        for (const [symbol, value] of romanSymbols) {
            while (num >= value) {
                result += symbol;
                num -= value;
            }
        }
        return result;
    }

    // Generate simple test cases
    for (let i = 0; i < romanNumerals.length; i++) {
        testCases.push({ input: romanNumerals[i], output: values[i] });
    }

    // Generate complex test cases
    for (let i = 0; i < 43; i++) {
        const num = Math.floor(Math.random() * 3999) + 1;
        const roman = intToRoman(num);
        testCases.push({ input: roman, output: num });
    }

    return JSON.stringify(testCases);
}

console.log(generateTestCases());