function generateTestCases() {
    const testCases = [];

    // Helper function to generate random email
    function randomEmail(name) {
        const domains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'example.com'];
        return `${name.toLowerCase()}${Math.floor(Math.random() * 100)}@${domains[Math.floor(Math.random() * domains.length)]}`;
    }

    // Helper function to generate random name
    function randomName() {
        const names = ['John', 'Mary', 'Alice', 'Bob', 'Charlie', 'David', 'Eva', 'Frank', 'Grace', 'Henry'];
        return names[Math.floor(Math.random() * names.length)];
    }

    // Generate 50 test cases
    for (let i = 0; i < 50; i++) {
        const numAccounts = Math.floor(Math.random() * 10) + 1; // 1 to 10 accounts
        const accounts = [];

        for (let j = 0; j < numAccounts; j++) {
            const name = randomName();
            const numEmails = Math.floor(Math.random() * 8) + 2; // 2 to 9 emails
            const account = [name];

            for (let k = 0; k < numEmails; k++) {
                account.push(randomEmail(name));
            }

            accounts.push(account);
        }

        // Merge some accounts randomly
        if (accounts.length > 1 && Math.random() < 0.7) {
            const idx1 = Math.floor(Math.random() * accounts.length);
            let idx2;
            do {
                idx2 = Math.floor(Math.random() * accounts.length);
            } while (idx2 === idx1);

            const commonEmail = accounts[idx1][1];
            accounts[idx2].push(commonEmail);
        }

        // Generate expected output
        const emailMap = new Map();
        for (const [name, ...emails] of accounts) {
            for (const email of emails) {
                if (!emailMap.has(email)) {
                    emailMap.set(email, { name, emails: new Set() });
                }
                emailMap.get(email).emails.add(email);
            }
        }

        const visited = new Set();
        const output = [];

        for (const [email, { name, emails }] of emailMap) {
            if (!visited.has(email)) {
                const mergedEmails = new Set();
                const stack = [email];

                while (stack.length > 0) {
                    const currentEmail = stack.pop();
                    if (!visited.has(currentEmail)) {
                        visited.add(currentEmail);
                        mergedEmails.add(currentEmail);
                        const relatedEmails = emailMap.get(currentEmail).emails;
                        for (const relatedEmail of relatedEmails) {
                            if (!visited.has(relatedEmail)) {
                                stack.push(relatedEmail);
                            }
                        }
                    }
                }

                output.push([name, ...Array.from(mergedEmails).sort()]);
            }
        }

        testCases.push({
            input: accounts,
            output: output.sort((a, b) => a[0].localeCompare(b[0]))
        });
    }

    return testCases;
}

console.log(JSON.stringify(generateTestCases()));