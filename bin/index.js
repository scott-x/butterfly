#!/usr/bin/env node
'use strict'

var chalk = require('chalk');
var inquirer = require('inquirer');

inquirer
  .prompt([
    /* Pass your questions in here */
      {
        type: 'rawlist',
        name: 'type',
        message: `${chalk.magenta(' Choose your db method: ')}`,
        choices: ['mysql','mongodb'],
        default: 'mysql'
      }
   
  ])
  .then(answers => {
     switch (answers.type){
        case 'mysql':
            require('./task').run('mysql')
           break;
        case "mongodb":
            require('./task').run('mongodb')
           break;      
     }

  }).catch(err=>{
    console.log(err)
  });