#!/usr/bin/env node


'use strict';

//process.argv.forEach(proc => console.log(proc));

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

// console.log(__filename);
// console.log(process.config)
console.log('cleanargs', cleanArgs(process.argv));
