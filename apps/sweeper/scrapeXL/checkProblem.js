const fs = require('fs');
require('dotenv').config();
const path = require('path');
const xlsx = require('xlsx');

const filePath = path.join(__dirname, 'leetcode_problems.xlsx');
const workbook = xlsx.readFile(filePath);
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];
const jsonData = xlsx.utils.sheet_to_json(sheet);
const links = jsonData.map(row => row["LeetCode Link"]).filter(Boolean);

const missingFilePath = path.join(__dirname, 'missingFile.txt');

fs.writeFileSync(missingFilePath, '');

if (!links || links.length === 0) {
    console.error('No valid LeetCode links found in the Excel sheet.');
    return;
}

function checkSlugFolders(links) {
    for (const link of links) {
        function extractSlugFromUrl(url) {
            if (!url || typeof url !== 'string') {
                console.error('Invalid URL provided to extractSlugFromUrl:', url);
                return null;
            }
            const match = url.match(/\/problems\/([^/]+)/);
            return match ? match[1] : null;
        }

        const slug = extractSlugFromUrl(link);
        if (!slug) {
            continue;
        }
        const problemFolder = path.join(__dirname,'..', '..', 'problems', slug, 'tests');
        console.log(problemFolder);

        if (fs.existsSync(problemFolder)) {
            const files = fs.readdirSync(problemFolder);
            const jsFileExists = files.includes(`${slug}.js`);
            const jsonFileExists = files.includes(`${slug}.json`);

            if (!jsFileExists || !jsonFileExists) {
                // Append missing JS or JSON file info to missingFile.txt
                console.log(problemFolder);
                fs.appendFileSync(missingFilePath, `${slug}: Missing ${!jsFileExists ? 'JS file' : ''} ${!jsonFileExists ? 'JSON file' : ''}\n`);
            }
        } else {
            // Folder doesn't exist, write that to missingFile.txt
            fs.appendFileSync(missingFilePath, `${slug}: Folder not found\n`);
        }
    }
};

checkSlugFolders(links);