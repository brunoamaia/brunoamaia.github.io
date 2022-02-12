import display from './displayControl.js';

function hasValidValues(actualValue, historicInput) {
  let position = -1
  let operation = 'error'

  if (actualValue != 0) {
    // validate actual value
    operation = 'insert'
    if (historicInput.length == 1) {
      position = 0
    } else {
      position = historicInput.length
    }
	
  } else if (historicInput.length <= 2) {
    // validate first value of historic
    if (historicInput[0] != '0000') {
      operation = 'update'
      position = 1
    }
  } else {
    if (historicInput.length % 2 == 0) {
      operation = 'update'
      position = historicInput.length - 1
    }
  }

  return [operation, position]
}

function changeLasOperator(historicInput, operator, position) {
  historicInput[position] = operator
  display('fullValues', '0', historicInput)

  return historicInput
}

function insertNewOperator(actualValue, historicInput, operator, position) {
  historicInput[position] = actualValue
  historicInput[position + 1] = operator
  actualValue = '0'
  display('fullValues', actualValue, historicInput)

  return [actualValue, historicInput]
}

export default function insertOperator(actualValue, historicInput, operator) {
  /* 
    operator: / (division), x (multiplication), % (percentage), - (subtraction), + (sum)
  */
  let [canInsertOperator, position] = hasValidValues(actualValue, historicInput)

  if (canInsertOperator == 'insert') {
    [actualValue, historicInput] = insertNewOperator(actualValue, historicInput, operator, position)

  } else if (canInsertOperator == 'update') {
    historicInput = changeLasOperator(historicInput, operator, position)

  } else {
    display('error3')
  }

  return [actualValue, historicInput]
}