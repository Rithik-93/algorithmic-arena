function generateTestCases() {
    const testCases = [];
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    function generateRandomWord(length) {
        return Array.from({ length }, () => alphabet[Math.floor(Math.random() * alphabet.length)]).join('');
    }

    for (let i = 0; i < 50; i++) {
        const operations = [];
        const inputs = [];
        const outputs = [null];

        operations.push("Trie");
        inputs.push([]);

        const trie = new Set();
        const prefixes = new Set();

        const numOperations = Math.floor(Math.random() * 20) + 5;

        for (let j = 0; j < numOperations; j++) {
            const op = Math.floor(Math.random() * 3);
            
            switch(op) {
                case 0: // insert
                    const insertWord = generateRandomWord(Math.floor(Math.random() * 2000) + 1);
                    operations.push("insert");
                    inputs.push([insertWord]);
                    outputs.push(null);
                    trie.add(insertWord);
                    for (let k = 1; k <= insertWord.length; k++) {
                        prefixes.add(insertWord.slice(0, k));
                    }
                    break;
                case 1: // search
                    const searchWord = Math.random() < 0.5 ? 
                        Array.from(trie)[Math.floor(Math.random() * trie.size)] || generateRandomWord(Math.floor(Math.random() * 2000) + 1) :
                        generateRandomWord(Math.floor(Math.random() * 2000) + 1);
                    operations.push("search");
                    inputs.push([searchWord]);
                    outputs.push(trie.has(searchWord));
                    break;
                case 2: // startsWith
                    const prefix = Math.random() < 0.5 ?
                        Array.from(prefixes)[Math.floor(Math.random() * prefixes.size)] || generateRandomWord(Math.floor(Math.random() * 2000) + 1) :
                        generateRandomWord(Math.floor(Math.random() * 2000) + 1);
                    operations.push("startsWith");
                    inputs.push([prefix]);
                    outputs.push(Array.from(trie).some(word => word.startsWith(prefix)));
                    break;
            }
        }

        testCases.push({
            input: {
                operations: operations,
                inputs: inputs
            },
            output: outputs
        });
    }

    return JSON.stringify(testCases);
}

console.log(generateTestCases());