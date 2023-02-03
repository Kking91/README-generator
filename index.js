// Import the fs module to be able to write to the file system
const fs = require("fs");

// Import the inquirer module to prompt the user for input
const inquirer = require("inquirer");

// Import the generateMarkdown module to create the README content
const generateMarkdown = require("./utils/generateMarkdown");

// Define an array of questions to ask the user
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

// Function to write the content to a file
function writeToFile(fileName, data) {
  // Use fs.writeFile to write the content to the file system
  fs.writeFile(fileName, data, function(err) {
    // Check if there is an error
    if (err) {
        // If there is an error, log it and return
      return console.log(err);
    }
    // If it was successful, console log the message
    console.log("Successfully wrote to file!");
  });
}

// Function to start the prompt and write the file
function init() {
    //  Uses inquirer.prompt to ask the user questions and receive answers
  inquirer.prompt(questions).then(function(response) {
    // Writes to the README1.md file and the content from the generateMarkdown
    writeToFile("README1.md", generateMarkdown(response));
  });
}

// Calls the init function to begin the program
init();