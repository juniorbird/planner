#!/usr/bin/env node

'use strict';

const inquirer = require('inquirer');
const fs = require('fs');

const testMD = fs.readFileSync('./test.md', 'UTF8');

const cleanArgs = args => {
  // First two args are:
  //  1. Node
  //  2. The running script
  // Bleh, who needs those?

  args = args.slice(2);
  return args.map(arg => {
    console.log(arg)
    return arg.replace(/-*/g,'');
  });
}

const MDtoArr = openFile => {
  let arr = /\n-*\n/g[Symbol.split](openFile);
  let question;
  let response;
  return arr.reduce((prev, curr, idx) => {
    if (idx > 0) {
      if ((idx % 2) === 1) {
        question = curr;
        response = '';
      } else {
        response = curr;
      }
      if (question && response) prev.push({ question: question, response: response});
    }
    return prev;
  }, [])
}


// console.log('cleanargs', cleanArgs(process.argv));

console.log(MDtoArr(testMD));
