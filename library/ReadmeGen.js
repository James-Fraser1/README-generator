function renderLicenseBadge(license) {
    if (license !== 'None') {
        return `![github license](https://img.shields.io/badge/license-${license}-blueviolet.svg)`
    }
    return '';
}

function renderLicenseLink(license) {
    if (license !== 'None') {
        return `[license](#license)`
    }
    return '';
}

function renderLicenseSection(license) {
    if (license !== 'None') {
        return `## License
            Licensed under the ${license} license`
    }
    return '';
}

function generateReadme(data) {
    return `
# **${data.title}**

${renderLicenseBadge(data.license)}

## **Table of Contents**
1. [Project Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Contributions](#contributions)
5. [Tests](#tests)
6. [Questions](#questions)

## **Description**
${data.description}

## **Installation**
${data.installation}

## **Usage**
${data.usage}

${renderLicenseSection(data.license)}

## **Contributions**
${data.contributions}

## **Tests**
${data.tests}

## **Questions**
### Contact me below:
* **Github:** [${data.git}](https://github.com/${data.git})
* ${data.email}
    `
}

module.exports = generateReadme