var censoredWords = ["sad","bad","mad"];
var customCensoredWords = [];
var star = "****";

function censor(inStr){
	for (idX in censoredWords){
		inStr = inStr.replace(censoredWords[idX],star);
	}
	for (idX in customCensoredWords){
		inStr = inStr.replace(customCensoredWords[idX],star);
	}
	return inStr;
}


function addCensoredWord(str){
	censoredWords.push(str);
}

function getCensoredWords(){
	return censoredWords.concat(customCensoredWords);
}

exports.censor = censor;
exports.addCensoredWord = addCensoredWord;
exports.getCensoredWords = getCensoredWords;