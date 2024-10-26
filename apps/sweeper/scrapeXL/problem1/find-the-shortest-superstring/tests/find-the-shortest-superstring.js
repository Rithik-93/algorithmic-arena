function generateTestCases() {
    const testCases = [];

    // Helper function to generate random string
    function generateRandomString(length) {
        const chars = 'abcdefghijklmnopqrstuvwxyz';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    }

    // Helper function to shuffle array
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // Generate test cases
    for (let i = 0; i < 50; i++) {
        const wordsCount = Math.floor(Math.random() * 12) + 1;
        const words = [];

        for (let j = 0; j < wordsCount; j++) {
            const wordLength = Math.floor(Math.random() * 20) + 1;
            words.push(generateRandomString(wordLength));
        }

        // Ensure all words are unique
        const uniqueWords = [...new Set(words)];
        shuffleArray(uniqueWords);

        testCases.push({
            input: uniqueWords,
            output: "" // The actual output will depend on the implementation
        });
    }

    return testCases;
}

console.log(JSON.stringify(generateTestCases()));