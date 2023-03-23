//take license as input and return the corresponding badge image as a string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `![MIT License](https://img.shields.io/badge/License-MIT-green.svg)`;
  }

  if (license === "Apache 2.0") {
    return `![Apache 2.0 License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
  }

  if (license === "GNU GPLv3") {
    return `![GNU GPL v3 License](https://img.shields.io/badge/License-GPL%20v3-orange.svg)`;
  }

  if (license === "Mozilla Public License 2.0") {
    return `![Mozilla Public License 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)`;
  }

  return "";
}

//take license as input and return the corresponding link to the license
function renderLicenseLink(license) {
  if (license === "MIT") {
    return `[MIT](https://opensource.org/licenses/MIT)`;
  }

  if (license === "Apache 2.0") {
    return `[Apache 2.0](https://opensource.org/licenses/Apache-2.0)`;
  }

  if (license === "GNU GPLv3") {
    return `[GNU GPL v3](https://www.gnu.org/licenses/gpl-3.0)`;
  }

  if (license === "Mozilla Public License 2.0") {
    return `[Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0)`;
  }

  return "";
}

//takes a license as input and returns a markdown section with license information
function renderLicenseSection(license) {
  if (license !== "") {
    return `## License
This project is licensed under the ${renderLicenseLink(license)} license.`;
  }

  return "";
}

function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you have any questions about the repo, open an issue or contact me directly at ${
    data.email
  }. You can find more of my work at [${data.github}](https://github.com/${
    data.github
  }).
`;
}

module.exports = generateMarkdown;
