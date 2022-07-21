// const inquirer = require('inquirer');
// const fs = require('fs');

// inquirer.prompt(
//     [
//         {
//             type: 'input',
//             message: "What is your project title?",
//             name:'title',
//             validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}}
//         },
//         {
//             type: 'input',
//             message: "Give a brief description of your project",
//             name:'description',
//             validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}}
//         },
//         {
//             type: 'input',
//             message: "How do you install your app?",
//             name:'installation',
//             validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}}
//         },
//         {
//             type: 'input',
//             message: "What are the instructions for your app?",
//             name:'instructions',
//             validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}}
//         },
//         {
//             type: 'input',
//             message: "Where there any other contributions?",
//             name:'contributions',
//             validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}}
//         },
//         {
//             type: 'input',
//             message: "What are your testing instructions?",
//             name:'test',
//             validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}}
//         },
//         {
//             type: 'list',
//             message: "What license did you use?",
//             name:'license',
//             choices: ['The MirOS License', 'The Naumen Public License', 'ISC License', 'IPA Font License'],
//             validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}}
//         },
//         {
//             type: 'input',
//             message: "Github Username:",
//             name:'git',
//             validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}}
//         },
//         {
//             type: 'input',
//             message: 'E-mail:',
//             name: 'email',
//             validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}}

//         }
//     ]
// )

// .then(({
//     title,
//     installation,
//     instructions,
//     contributions,
//     test,
//     license,
//     git,
//     email,
// }) => {

// // README Template
// const template = `# ${title}

// * [Installation](#installation)
// ${installation}
// * [Instructions](#instructions)
// ${instructions}
// * [Contributions](#contributions)
// ${contributions}
// * [Test](#test)
// ${test}
// * [License](#license)
// ${license}

// * [Git](#git)
// ${git}
// * [E-mail](#email)
// ${email}`;

// // README Function
// createNewFile(title,template);
// }
// );
// // NewFile Function
// function createNewFile(fileName,template){
//     fs.writeFile(`.?${fileName.toLowerCase().split('').join('')}.nd`,data,()=>{
//         if(err){
//             console.log(err)
//             }
//             console.log('Your README has been generated.');
//     })
// }


const inquirer = require('inquirer');

const questions = [
    {
                    type: 'input',
                    message: "What is your project title?",
                    name:'title',
                    validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}}
                },
                {
                    type: 'input',
                    message: "Give a brief description of your project",
                    name:'description',
                    validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}}
                },
                {
                    type: 'input',
                    message: "How do you install your app?",
                    name:'installation',
                    validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}}
                },
                {
                    type: 'input',
                    message: "What are the instructions for your app?",
                    name:'instructions',
                    validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}}
                },
                {
                    type: 'input',
                    message: "Where there any other contributions?",
                    name:'contributions',
                    validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}}
                },
                {
                    type: 'input',
                    message: "Do you have any tests for your application?",
                    name:'test',
                    validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}}
                },
                {
                    type: 'list',
                    message: "What license did you use?",
                    name:'license',
                    choices: ['The MirOS License', 'The Naumen Public License', 'ISC License', 'IPA Font License'],
                    validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}}
                },
                {
                    type: 'input',
                    message: "Github Username:",
                    name:'git',
                    validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}}
                },
                {
                    type: 'input',
                    message: 'E-mail:',
                    name: 'email',
                    validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}}
        
                }
]

function runQuery() {
    return inquirer.prompt(questions)
    .then((answers) => {
        console.log(answers)
        return answers
    })
    .catch((error) => {
        console.log(error)
    })
}

runQuery();