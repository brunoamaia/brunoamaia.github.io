import display from './displayControl.js'

function calculate(historicInput) {

	let freePass = historicInput[historicInput.length - 1]
	return [freePass]
}

export default function calculateResult(actualValue, historicInput) {
	console.log('Resultado');
	console.log(`leng: ${history.length} | now: ${actualValue} | par: ${historicInput.length % 2}`)

	let values = []
	let operators = []
	let conta = 0
	let evaldo = ''
	historicInput.forEach(element => {
		evaldo += element
	});

	for (let i = 0; i < historicInput.length; i++) {
		if (i % 2 == 0) {
			values.push(parseFloat(historicInput[i]))
		} else {
			operators.push(historicInput[i])
		}
	}

	conta = parseFloat(values[0] + operators[0] + values[1])
	console.log(`conta = ${conta}`)
	console.log(`evaldo [${evaldo + actualValue}] = ${eval(evaldo + actualValue)}`)

	console.log('Vetores')
	console.log(values)
	console.log(operators)
	console.log(`\n\n`)

	if (historicInput.length == 1 && actualValue != 0) {
		historicInput[0] = actualValue
		actualValue = '0'
		display('fullValues', actualValue, historicInput)

	} else if (historicInput.length % 2 == 0 && actualValue == 0) {
		display('error3')

	} else if (historicInput.length % 2 == 1) {
		// function to test
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