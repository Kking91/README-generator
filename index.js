const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const questions = [
    {
      type: "input",
      name: "title",
      message: "What is your project's name?"
    },
    {
      type: "input",
      name: "description",
      message: "Please provide a brief description of your project:"
    },
    {
      type: "input",
      name: "installation",
      message: "Please provide installation instructions:"
    },
    {
      type: "input",
      name: "usage",
      message: "Please provide usage instructions:"
    },
    {
      type: "input",
      name: "contributing",
      message: "Please provide contributing guidelines:"
    },
    {
      type: "input",
      name: "tests",
      message: "Please provide test instructions:"
    },
    {
      type: "list",
      name: "license",
      message: "Please choose a license for your project:",
      choices: ["MIT", "Apache 2.0", "GPL 3.0", "None"]
    },
    {
      type: "input",
      name: "github",
      message: "What is your GitHub username?"
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address?"
    }
  ];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function(err) {
    if (err) {
      return console.log(err);
    }
    console.log("Successfully wrote to file!");
  });
}

function init() {
  inquirer.prompt(questions).then(function(response) {
    writeToFile("README1.md", generateMarkdown(response));
  });
}

init();