// Function to generate a random binary tree
function generateRandomTree(depth, maxVal) {
    if (depth === 0 || Math.random() < 0.3) {
        return null;
    }
    const val = Math.floor(Math.random() * (2 * maxVal + 1)) - maxVal;
    const node = { val, left: null, right: null };
    node.left = generateRandomTree(depth - 1, maxVal);
    node.right = generateRandomTree(depth - 1, maxVal);
    return node;
}

// Function to serialize a binary tree
function serialize(root) {
    if (!root) return '[]';
    const queue = [root];
    const result = [];
    while (queue.length) {
        const node = queue.shift();
        if (node) {
            result.push(node.val);
            queue.push(node.left);
            queue.push(node.right);
        } else {
            result.push(null);
        }
    }
    while (result[result.length - 1] === null) {
        result.pop();
    }
    return JSON.stringify(result);
}

// Generate 50 test cases
const testCases = [];
for (let i = 0; i < 50; i++) {
    const maxDepth = Math.floor(Math.random() * 10) + 1;
    const root = generateRandomTree(maxDepth, 1000);
    const serialized = serialize(root);
    testCases.push({
        input: serialized,
        output: serialized
    });
}

console.log(JSON.stringify(testCases));