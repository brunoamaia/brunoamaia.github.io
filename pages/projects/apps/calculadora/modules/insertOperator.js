import display from './displayControl.js';

function hasValidValues(actualValue, historicInput) {
  // validate actual value
  let isValid = false
  if (actualValue != 0) {
    isValid = true
  }

  // find position
  let position = -1
  if (historicInput.length == 1) {
    position = 0
  } else {
    position = historicInput.length
  }

  return [isValid, position]
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
  if (canInsertOperator) {
    [actualValue, historicInput] = insertNewOperator(actualValue, historicInput, operator, position)

  } /* else if (historicInput.length == 1 && (historicInput[0] != '0000' | historicInput[0] != '0' )) {
    [actualValue, historicInput] = insertNewOperator(actualValue, historicInput, operator, position)
  } */ else {
    let canChangeOperator = (historicInput.length % 2 == 0) ? true : false
    if (canChangeOperator && historicInput.length > 1) {
      historicInput[historicInput.length - 1] = operator
      display('fullValues', actualValue, historicInput)
    } else if (historicInput.length == 1) {
      display('error3')
    }
  }

  return [actualValue, historicInput]
}