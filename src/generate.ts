import _ from 'lodash';

export default function generatePassword(length:number ,includeLowerCases:boolean , includeSymbols:boolean , includeUpperCases:boolean , includeNumbers:boolean  ):string {
  
  let concatenationOfAllLetters:string="";
  let upperCasesLetters="";
  let symbolsLetters=""
  let numbersLetters=""
  let lowerCasesLetters=""
  const numberOfUpperCases:number=includeUpperCases ? Math.floor(length/4) : 0;
  const numberOfSymbols:number=includeSymbols ? Math.floor(length/4) : 0;
  const numberOfNumbers:number=includeNumbers ? Math.floor(length/4) : 0;
  const numberOfLowerCases:number=length-(numberOfUpperCases+numberOfSymbols+numberOfNumbers)

  //now generating the uppercases letters
  //generate random number between 97 and 122 beceause Lowercase letters (a-z): ASCII codes 97 to 122
  for(let i=0;i<numberOfLowerCases;i++ ){
    
    const randomNumber = Math.floor(Math.random() * (122 - 97 + 1)) + 97;
    lowerCasesLetters+=String.fromCharCode(randomNumber)
  }
  for(let i=0;i<numberOfNumbers;i++ ){
    //Numbers (0-9): ASCII codes 48 to 57
    const randomNumber=Math.floor(Math.random()*(57-48 +1) + 48)
    numbersLetters+=String.fromCharCode(randomNumber)
  }
  for(let i=0;i<numberOfSymbols;i++ ){
    //Symbols: Various ranges, but common printable symbols are ASCII codes 32 to 47, 58 to 64, 91 to 96, and 123 to 126
    const randomNumber=Math.floor(Math.random()*(64-58 +1) + 58)
    symbolsLetters+=String.fromCharCode(randomNumber)
  }
  for(let i=0;i<numberOfUpperCases;i++ ){
    //Uppercase letters (A-Z): ASCII codes 65 to 90
    const randomNumber=Math.floor(Math.random()*(90-65 +1) + 65)
    upperCasesLetters+=String.fromCharCode(randomNumber)
  }
  concatenationOfAllLetters=upperCasesLetters+symbolsLetters+lowerCasesLetters+numbersLetters;
  

  
  
return _.shuffle(concatenationOfAllLetters.split('')).join("");
}
console.log(generatePassword(9,true,false,true,false))