const inquirer = require('inquirer');
const fs = require('fs');
const MarkDown = require('./library/ReadmeGen');

const questions = [
    {
        type: 'input',
        message: "What is your project title?",
        name: 'title',
        validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } }
    },
    {
        type: 'input',
        message: "Give a brief description of your project",
        name: 'description',
        validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } }
    },
    {
        type: 'input',
        message: "How do you install your app?",
        name: 'installation',
        validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } }
    },
    {
        type: 'input',
        message: "What are the instructions for your app?",
        name: 'usage',
        validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } }
    },
    {
        type: 'input',
        message: "Where there any other contributions?",
        name: 'contributions',
        validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } }
    },
    {
        type: 'input',
        message: "Do you have any tests for your application?",
        name: 'tests',
        validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } }
    },
    {
        type: 'list',
        message: "What license did you use?",
        name: 'license',
        choices: ['MIT', 'Apache', 'BSD'],
        validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } }
    },
    {
        type: 'input',
        message: "Github Username:",
        name: 'git',
        validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } }
    },
    {
        type: 'input',
        message: 'E-mail:',
        name: 'email',
        validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } }

    }
]

function runQuery() {
    return inquirer.prompt(questions)
        .then((data) => {
            const mark = MarkDown(data)
            fs.writeFile('README.md', mark, function (err) {
                if (err) {
                    console.log('Could not create README', err)
                } else {
                    console.log('Your README has been created')
                }
            })
        })
        .catch((error) => {
            console.log(error)
        })
}

runQuery()