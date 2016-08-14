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
const fh = require('./fileHelper')
const ch = require('./cliHelper')
// I think my date needs are so minimal that I don't need Moment.
// I may regret that shortly!
const DATES = require('constants').DATES

// See how the user has called us
//  If no config exists, doesn't matter; do configuration

// If AM
// Run AM questions
// Save to a new file
// Save to .planner cache


// If PM
// Load .planner cache
// Check off done tasks
// Ask questions
// Save results to this morning's file

// If retro
// Load .planner cache
// Talk about what did this week
// Load last week's info
// Load this week's questions
// Save results to this week's file and to .planner cache for next week


// If todo
// Load .planner cache
// Show today's to-dos


// If Next
// Load .planner cache
// Show next


// If complete
// Load .planner cache
// Complete item in .planner cache





const testMD = fs.readFileSync('./test.md', 'UTF8');





// console.log('cleanargs', cleanArgs(process.argv));

console.log(fh.ArrToMD(fh.MDtoArr(testMD)));
