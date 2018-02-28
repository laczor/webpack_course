import'jquery';
import '../css/main.scss';
import { RandomGenerator } from './random-generator';
import '../users.html';

const outputParagraph = $('#outputParagraph');

function outputRandomInt (){
    outputParagraph.html(RandomGenerator.randomInteger());
}

function outputRandomRange (){
    outputParagraph.html( RandomGenerator.randomRange(1, 500));
}

const buttonRndInt = $('#randomInt');
const buttonRndRange = $('#randomRange');

console.log(buttonRndRange);
console.log(outputParagraph);

buttonRndInt.click(function(){
	console.log("clicked");
	outputRandomInt();
});
buttonRndRange.click(function(){
	outputRandomRange();
});

// buttonRndInt.addEventListener('click', outputRandomInt);
// buttonRndRange.addEventListener('click', outputRandomRange);