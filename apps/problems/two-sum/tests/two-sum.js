function generateTestCases() {
    const testCases = [];

    for (let i = 0; i < 50; i++) {
        const arrLength = Math.floor(Math.random() * 20) + 2; // Array length between 2 and 21
        const arr = [];
        for (let j = 0; j < arrLength; j++) {
            arr.push(Math.floor(Math.random() * 1000)); // Random numbers between 0 and 999
        }

        const index1 = Math.floor(Math.random() * arrLength);
        let index2;
        do {
            index2 = Math.floor(Math.random() * arrLength);
        } while (index2 === index1);

        const target = arr[index1] + arr[index2];

        testCases.push({
            input: {
                arr: arr,
                target: target
            },
            output: [Math.min(index1, index2), Math.max(index1, index2)]
        });
    }

    return testCases;
}

console.log(JSON.stringify(generateTestCases()));