import calculateResult from './calculateResult.js'
import display from './displayControl.js'
import insertOperator from './insertOperator.js'
import { dotValidation, numberValidation, signalValidation } from './validateActualValue.js'

export default function inputs(type, value, actualValue, historicInput) {
  /*  type: 'number' | 'operation'
      value: 0...9   |   + - , / x % = ca(clear all) ce(clear element) -1(invert signal)
  */

  if (type === 'number') {
    actualValue = numberValidation(value, actualValue)
  } else {
    switch (value) {
      case 'ca':
        actualValue = '0'
        historicInput = ['0000']
        display('fullValues', actualValue, historicInput)
        break;
      case 'ce':
        actualValue = '0'
        display('actualValue', actualValue)
        break;
      case '.':
        actualValue = dotValidation(actualValue)
        break;
      case '-1':
        actualValue = signalValidation(actualValue)
        break;
      case '/':
        [actualValue, historicInput] = insertOperator(actualValue, historicInput, value)
        break;
      case 'X':
        [actualValue, historicInput] = insertOperator(actualValue, historicInput, value)
        break;
      /* case '%':
        [actualValue, historicInput] = insertOperator(actualValue, historicInput, value)
        break; */
      case '-':
        [actualValue, historicInput] = insertOperator(actualValue, historicInput, value)
        break;
      case '+':
        [actualValue, historicInput] = insertOperator(actualValue, historicInput, value)
        break;
      case '=':
        [actualValue, historicInput] = calculateResult(actualValue, historicInput, value)
        break;
      default:
        display('error1')
    }
  }

  return [actualValue, historicInput]
}