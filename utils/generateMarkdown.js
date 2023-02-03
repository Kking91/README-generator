// Defines a function to render a license badge based on the license type
function renderLicenseBadge(license) {
  // If license type is MIT return the MIT license badge
  if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } 
  // If license type is Apache 2.0 return the Apache 2.0 license badge
  else if (license === "Apache 2.0") {

    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } 
  // If license type is GPL 3.0 return the GPL 3.0 license badge
  else if (license === "GPL 3.0") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } 
  // If license type is unknown return an empty string
  else {
    return "";
  }
}

// Defines a function to render a link to the license information based on the license type
function renderLicenseLink(license) {
  // If license type is MIT return the MIT license badge
  if (license === "MIT") {
    return "https://opensource.org/licenses/MIT";
  } 
  // If license type is Apache 2.0 return the Apache 2.0 license badge
  else if (license === "Apache 2.0") {
    return "https://www.apache.org/licenses/LICENSE-2.0";
  } 
  // If license type is GPL 3.0 return the GPL 3.0 license badge
  else if (license === "GPL 3.0") {
    return "https://www.gnu.org/licenses/gpl-3.0";
  } 
  // If license type is unknown return an empty string
  else {
    return "";
  }
}

// Defines a function to render a string indicating the license type
function renderLicenseSection(license) {
  // If license type is MIT return the MIT license badge
  if (license === "MIT") {
    return "This project is licensed under the MIT License.";
  } 
  // If license type is Apache 2.0 return the Apache 2.0 license badge
  else if (license === "Apache 2.0") {
    return "This project is licensed under the Apache 2.0 License.";
  } 
  // If license type is GPL 3.0 return the GPL 3.0 license badge
  else if (license === "GPL 3.0") {
    return "This project is licensed under the GPL 3.0 License.";
  } 
  // If license type is unknown return an empty string
  else {
    return "";
  }
}

// This function generates a markdown file using the passed in data.
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

## License

${renderLicenseSection(data.license)}
${renderLicenseLink(data.title)}

## Questions
For any questions, please contact me at [${data.email}](mailto:${data.email}) or through [GitHub](https://github.com/${data.github}).`;
}

// Exports the generateMarkdown function to be used in other modules.
module.exports = generateMarkdown;