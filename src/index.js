#!/usr/bin/env node


/**
This is a command-line interface that helps build daily/weekly personal
management documents, with a simple workflow.

Call it with:

planner : Launches to a list from which you select your task)
planner -s --setup : Create your configuration files
planner -a --start : Start your day
planner -p --end : End your day
planner -r --retro : End your current week/plan the next
planner -t --todo : Display a list of what you committed to do today
planner -n -next : Display the #1 incomplete item from your to-do list
planner -c {n} --complete {n} : Complete the nth item on your to-do list
planner -c --complete : When passed without a number, query for a new task to have completed


**/

'use strict';

const inquirer = require('inquirer');
const fs = require('fs');
const fm = require('./fileManager')
const ch = require('./cliHelper')

const testMD = fs.readFileSync('./test.md', 'UTF8');





// console.log('cleanargs', cleanArgs(process.argv));

console.log(fm.ArrToMD(fm.MDtoArr(testMD)));
