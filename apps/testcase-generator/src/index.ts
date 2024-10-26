import * as fs from 'fs';
import * as path from 'path';
import { executeJSFile } from './execute';
import processProblemsDirectory from './convertJson';
import { generateTestCases, generateTestCasesType } from './llm';

type ExtractDataReturnType = {
  title: string;
  description: string;
};

function extractDescriptionFromFile(problemFolder: string): string {
  const problemMdPath = path.join(problemFolder, 'Problem.md');
  if (fs.existsSync(problemMdPath)) {
    const problemMdContent = fs.readFileSync(problemMdPath, 'utf-8');
    return problemMdContent.trim();
  } else {
    throw new Error(`Problem.md file not found in ${problemFolder}`);
  }
}

function extractData(problemFolder: string): ExtractDataReturnType {
  const description = extractDescriptionFromFile(problemFolder);

  const structureMdPath = path.join(problemFolder, 'Structure.md');
  let title = '';

  if (fs.existsSync(structureMdPath)) {
    const structureMdContent = fs.readFileSync(structureMdPath, 'utf-8');
    
    const titleMatch = structureMdContent.match(/Problem Name:\s*"(.+?)"/);
    title = titleMatch ? titleMatch[1] : 'Unknown Title';
  } else {
    throw new Error(`Structure.md file not found in ${problemFolder}`);
  }

  return { title, description };
}

async function getProblemDetailsFromFolder(folderName: string): Promise<ExtractDataReturnType | null> {
  const problemsFolder = path.resolve(__dirname, '..', '..', 'problems', folderName);

  try {
    const jsonData = extractData(problemsFolder);
    return jsonData;
  } catch (error) {
    console.error(`Error fetching problem details for ${folderName}:`, (error as Error).message);
    return null;
  }
}

async function getAllProblemDetails(): Promise<void> {
  const problemsFolder = path.resolve(__dirname, '..', '..', 'problems');

  const problemFolders = fs.readdirSync(problemsFolder).filter(file => {
    return fs.statSync(path.join(problemsFolder, file)).isDirectory();
  });

  for (const folderName of problemFolders) {
    console.log(`Processing folder: ${folderName}`);
    const problemDetails = await getProblemDetailsFromFolder(folderName);
    if (problemDetails) {
      const testCaseParams: generateTestCasesType = { problemJson: problemDetails };
      await generateTestCases(testCaseParams, { slug: folderName });
      const directoryPath = path.join(__dirname, '..', '..', 'problems', folderName, 'tests', `${folderName}.js`);
      await executeJSFile(directoryPath);
    } else {
      console.error("Extracting details from .md files failed");
    }
  }
}

// (async () => {
//   await getAllProblemDetails();
//   const problemsDirectoryPath = path.join(__dirname, '..', '..', 'problems');
//   await processProblemsDirectory(problemsDirectoryPath);
// })();
async function main() {
  await getAllProblemDetails();
  const problemsDirectoryPath = path.join(__dirname, '..', '..', 'problems');
  await processProblemsDirectory(problemsDirectoryPath);
}
main();

console.log("asd")