import display from './displayControl.js'

function calculate(historicInput) {
  
  let freePass = historicInput[historicInput.length - 1]
  return [freePass]
}

export default function calculateResult(actualValue, historicInput) {
  console.log('Resultado');
  console.log(`leng: ${history.length} | now: ${actualValue} | par: ${historicInput.length % 2}`)

  if (historicInput.length == 1 && actualValue != 0) {
    historicInput[0] = actualValue
  } else if (historicInput.length % 2 == 0 && actualValue == 0) {
    display('error3')
  } else if (historicInput.length % 2 == 1) {
    console.log('change values position')
    historicInput = []
    historicInput[0] = actualValue
    actualValue = '0'
    display('fullValues', actualValue, historicInput)
  } else {
    console.log('calculate')
    historicInput.push(actualValue)
    actualValue = calculate(historicInput)
    display('fullValues', actualValue, historicInput)

    console.log(`actual: ${actualValue} | history ${historicInput}`)
  }



  // actualValue = '0'
  // display('fullValues', actualValue, historicInput)

  return [actualValue, historicInput]
}