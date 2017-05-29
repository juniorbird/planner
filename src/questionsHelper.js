import fs from 'fs';

function getFile(fromFile) {
	return JSON.parse(fs.readFileSync(fromFile));
}

export function loadAgenda(fromFile, whichAgenda) {
	let theFile = getFile(fromFile);
	console.log('tf', theFile);
	let theAgenda = theFile.agendas[whichAgenda];
	console.log('ta', theAgenda);
	return theFile.questions.filter(
		question => theAgenda.includes(question.id) && question
	);
}
