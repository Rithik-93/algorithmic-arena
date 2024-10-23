function generateTestCases() {
    const testCases = [];

    for (let i = 0; i < 50; i++) {
        const nums1 = generateRandomSortedArray();
        const nums2 = generateRandomSortedArray();
        const output = calculateMedian(nums1, nums2);

        testCases.push({
            input: { nums1, nums2 },
            output: output
        });
    }

    return testCases;
}

function generateRandomSortedArray() {
    const length = Math.floor(Math.random() * 10) + 1;
    const array = [];
    let current = Math.floor(Math.random() * 10) - 5;

    for (let i = 0; i < length; i++) {
        array.push(current);
        current += Math.floor(Math.random() * 5) + 1;
    }

    return array;
}

function calculateMedian(nums1, nums2) {
    const merged = [...nums1, ...nums2].sort((a, b) => a - b);
    const mid = Math.floor(merged.length / 2);

    if (merged.length % 2 === 0) {
        return (merged[mid - 1] + merged[mid]) / 2;
    } else {
        return merged[mid];
    }
}

console.log(JSON.stringify(generateTestCases()));