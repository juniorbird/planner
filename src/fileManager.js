'use strict';

const MDtoArr = openFile => {
  /**
  * Takes in a Markdown-formatted file
  * Returns an array of questions and answers of the format
  * [
  *   { question: 'Text of question asked',
  *     answer: 'Text of user answer' },
  *   { question: 'Text of question asked 2',
  *     answer: 'Text of user answer 2' },
  * ]
  * @param openFile {String} The result of fs.readFile for the Markdown-formatted file
  * @returns {Array} An array of objects containing user questions and answers
  * @private
  **/
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
      if (question && response) prev.push({ question: question, response: response });
    }
    return prev;
  }, [])
}

const ArrToMD = questionArr => {
  /**
  * Takes in an array of questions and answers of the format
  * [
  *   { question: 'Text of question asked',
  *     answer: 'Text of user answer' },
  *   { question: 'Text of question asked 2',
  *     answer: 'Text of user answer 2' },
  * ]
  * Returns a Markdown-formatted string that can be written into a file
  * @param questionArr {Array} An array of objects containing user questions and answers
  * @returns {String} A Markdown-formatted string that can be written to a file
  * @private
  **/
  let question;
  let response;
  return questionArr.reduce((prev, curr) => {
    question = curr.question + '\n' + '-'.repeat(curr.question.length);;
    response = curr.response;
    return prev + '\n\n' + question + '\n' + response;
  }, '');
}

module.exports = { MDtoArr, ArrToMD };
