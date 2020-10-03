const fs = require("fs");
const inquirer = require("inquirer");


const questions = [
    //title of project
    {
      
        type: 'input',
        name: 'repoName',
        message: 'What is your project title?',
     
    },
    //git hub user name 
    {
        type: 'input',
        name: 'gitHubName',
        message: 'What is your username on Github?',
     
    },
    // description of the project 
    {
        type: 'input',
        message: 'Description of this application',
        name: 'description',
     
    },
    // install steps? 
    {
        type: 'input',
        message: 'How does a user install your application? Provide instuctions here',
        name: 'installApp',
     
    },
   // How to use application? 
    {
        type: 'input',
        message: 'How does a user use your application? Provide instuctions here',
        name: 'appInstructions',
     
    },
    // bugs? 
    {
        type: 'input',
        message: 'Would you like you users to be able to report issues or contribute to this project? add instructions here.',
        name: 'appIssuesAndCont',
     
    },
 // list for license?  
 {
    type: "list",
    message: "Select license",
    name: "License",
    choices: [
        "MIT",
        "GVL-GPL 3.0",
        "APACHE 2.0",
        "BSD 3",
        "None"
    ]
},
 // any contributors?
    {
        type: 'input',
        message: 'Who else contributed to your application? if none write "none" ',
        name: 'contributors',
     
    },

];
function init() {
    inquirer.prompt(questions).then((response)=>{
    
   
    fs.appendFileSync("README.md", ("# " + response.repoName )+ '\n', function(err) { 
    
        if (err) { 
        console.log(err)
        }
        else {
        console.log("Success")
        }
    
    })
    
    fs.appendFileSync("README.md", ("This application was developed by: " + response.gitHubName + '\n') + '\n', function(err) { 
    
        if (err) { 
        console.log(err)
        }
        else {
        console.log("Success")
        }
    
    })
    
    fs.appendFileSync("README.md",  ( response.description ) + '\n', function(err) { 
    
        if (err) { 
        console.log(err)
        }
        else {
        console.log("Success")
        }
    
    })
     
    fs.appendFileSync("README.md", ("## Installation" + '\n' + response.installApp )+ '\n', function(err) { 
    
        if (err) { 
        console.log(err)
        }
        else {
        console.log("Success")
        }
    
    })

    fs.appendFileSync("README.md", ("## How to use the Application" + '\n' + response.appInstructions)+ '\n', function(err) { 
    
        if (err) { 
        console.log(err)
        }
        else {
        console.log("Success")
        }
    
    })
    
    fs.appendFileSync("README.md", ("## Issue Reporting and Contributing" + '\n' + response.appIssuesAndCont)+ '\n', function(err) { 
    
        if (err) { 
        console.log(err)
        }
        else {
        console.log("Success")
        }
    
    })
 
    fs.appendFileSync("README.md", ("## Other Contibuting Developers:" + '\n' + response.contributors)+ '\n', function(err) { 
    
        if (err) { 
        console.log(err)
        }
        else {
        console.log("Success")
        }
    
    })
  
    fs.appendFileSync("README.md", ("## Licence" + '\n' + response.License)+ '\n', function(err) { 
    
        if (err) { 
        console.log(err)
        }
        else {
        console.log("Success")
        }
    
    })
    
    })
    }
    
    
    init();
    

