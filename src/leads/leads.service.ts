import { Injectable } from '@nestjs/common';

@Injectable()
export class LeadsService {}


// const a = {
//     fieldName:"a",
//     formula: "b * c + d * c + 100 - 10"
// }

// const data = {
//     b: 10,
//     c: 20,
//     d: 40
// }

// const getValueByKeyOrResult = (data, firstNumber) => {
//     if(isNaN(Number(firstNumber))) return data[firstNumber]
//     else return Number(firstNumber)
// }

// const createNewFieldObj = (data,formula) =>{

//     const splitSpaces = formula.split(' ');

//     const firstNumber = splitSpaces[0];
//     const secondNumber = splitSpaces[2];
//     const operator = splitSpaces[1];
//     let result = 0;
    
//     if( operator === '+' ){
//         result = getValueByKeyOrResult(data, firstNumber) + getValueByKeyOrResult(data,secondNumber)
//     }

//     if( operator === '-' ){
//          result =  getValueByKeyOrResult(data, firstNumber) - getValueByKeyOrResult(data,secondNumber)
//     }

//     if( operator === '*' ){
//          result =  getValueByKeyOrResult(data, firstNumber) * getValueByKeyOrResult(data,secondNumber)
//     }

//     if( operator === '/' ){
//          result =  getValueByKeyOrResult(data, firstNumber) / getValueByKeyOrResult(data,secondNumber)
//     }
    
//     formula = splitSpaces.slice(3, splitSpaces.length).join(' ')
//     formula = result + ' ' + formula
//     console.log("formula2", formula)
    
//     if(isNaN(Number(formula))) return  createNewFieldObj( data, formula )
//     else return Number(formula)
// }

// // data['a'] = createNewFieldObj(data, '200 + d');
// data['a'] = createNewFieldObj(data, a.formula);

// console.log(data)