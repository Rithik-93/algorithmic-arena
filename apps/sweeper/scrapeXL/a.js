// const { getLeetCodeProblemDetails } = require("./scrapeLeetcode");
const fs = require('fs');
const inquirer = require('inquirer');
require('dotenv').config();
const { getLeetCodeProblemDetails } = require('./scrapeLeetcode');
const { generateTestCases } = require('./generateTestCases');
const path = require('path');
const { executeJSFile } = require('./execute');
const { splitJsonToInputOutput } = require('./splitJson');
const xlsx = require('xlsx');


function extractSlugFromUrl(url) {
    if (!url || typeof url !== 'string') {
      console.error('Invalid URL provided to extractSlugFromUrl:', url);
      return null;
    }
    const match = url.match(/\/problems\/([^/]+)/);
    return match ? match[1] : null;
  }


async function processLink(link) {
    try {
      const slug = extractSlugFromUrl(link)
      console.log("checking",slug);
      const slugFolder = path.join(__dirname, '..', '..', 'problems', slug);
      const slugJsPath = path.join(slugFolder, 'tests', `${slug}.js`);
      const slugJsonPath = path.join(slugFolder, 'tests', `${slug}.json`);
      const ProblemMdFilePath = path.join(slugFolder, 'Problem.md')
      const StructureMdFilePath = path.join(slugFolder, 'Structure.md')
      // console.log(slugJsonPath)
  
      if (fs.existsSync(slugFolder) && fs.existsSync(slugJsPath) && fs.existsSync(slugJsonPath) && fs.existsSync(ProblemMdFilePath) && fs.existsSync(StructureMdFilePath)) {
        // console.log(`${slug} folder, JS file, and JSON file exist already.`);
        return; // Skip the rest of the current iteration and move to the next one
      }
  
      const problemData = await getLeetCodeProblemDetails(link);
      console.log(problemData);
  
      // if (problemData) {
      //   const slug = problemData.title.toLowerCase().replace(/\s+/g, '-');
      //   await generateTestCases(problemData, slug);
  
      //   const filePath = path.join(__dirname, '..', '..', 'problems', `${slug}`, 'tests', `${slug}.js`);
      //   const jsonFilePath = await executeJSFile(filePath);
  
      //   if (fs.existsSync(jsonFilePath)) {
      //     splitJsonToInputOutput(jsonFilePath);
      //   } else {
      //     console.log('JSON file not found after executing the JavaScript file.');
      //   }
      // } else {
      //   console.log(`Failed to fetch data for link: ${link}`);
      // }
    } catch (error) {
      console.error(`Error processing link: ${link}`, error);
    }
  }


  const filePath = path.join(__dirname, 'leetcode_problems.xlsx');
  const workbook = xlsx.readFile(filePath);
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  const jsonData = xlsx.utils.sheet_to_json(sheet);
  const links = jsonData.map(row => row["LeetCode Link"]).filter(Boolean);

  if (!links || links.length === 0) {
    console.error('No valid LeetCode links found in the Excel sheet.');
    return;
  }
  console.log('Starting to process LeetCode links...');

  async function main() {

      await processLinks(links);
      console.log('All LeetCode problems processed successfully.');
    }


  async function processLinks(links) {
    for (const link of links) {
      await processLink(link);
    }
  }

main();