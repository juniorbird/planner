'use strict';

const helpText = `planner : Launches to a list from which you select your task)
planner -s --setup : Create your configuration files
planner -a --start : Start your day
planner -p --end : End your day
planner -r --retro : End your current week/plan the next
planner -t --todo : Display a list of what you committed to do today
planner -n -next : Display the #1 incomplete item from your to-do list
planner -c {n} --complete {n} : Complete the nth item on your to-do list
planner -c --complete : When passed without a number, query for a new task to have completed`

const cleanArgs = args => {
  /**
  * Given a set of command-line arguments
  * Discard the first two args, which are
  * 1. node
  * 2. The running script
  * Return an array of the remaining args
  * @param args {array} always process.argv
  * @returns {Array} An array of arguments, with - and -- removed
  * @private
  **/

  args = args.slice(2);
  return args.map(arg => {
    console.log(arg)
    return arg.replace(/-*/g,'');
  });
}

module.exports = { helpText, cleanArgs };
