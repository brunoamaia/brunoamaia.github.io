/* Control and format values in the display 
	The display contains two parts, the main (actual value) and the secondary (operations history)
	actual - control of the actual value (bigger)
	historic - control of the operations history (smaller)
*/

export default function display(operation, actualValue = 0, historicInput = []) {
	/* operation: 
		actualValue - update main display with new digit
		fullValues - update all display
		error1 - error: not implemented
		error2 - error: duplicate dot
		error3 - error: insert a value
		error4 - error: not divide by 0
	*/
	var main = document.querySelector('div#actual')
	var historic = document.querySelector('div#history')

	function updateMain() {
		let sizeMainDisplay = 9
		if (actualValue.length > sizeMainDisplay) {
			let coverActualValue = actualValue.split('').slice(1).slice(-sizeMainDisplay).join('')
			main.innerHTML = `...${coverActualValue}`
		} else {
			main.innerHTML = actualValue
		}
	}

	function updateHistoric(message = '') {
		let sizeHistoricnDisplay = 18
		let fullHistoric = ''
		historicInput.forEach(element => {
			fullHistoric += element
		});

		if (message != '') {
			historic.innerHTML = message
		} else if (fullHistoric.length > sizeHistoricnDisplay) {
			let coverhistoricInput = fullHistoric.split('').slice(1).slice(-sizeHistoricnDisplay).join('')
			historic.innerHTML = `...${coverhistoricInput}`
		} else {
			historic.innerHTML = historicInput.join('')
		}
	}

	if (operation == 'actualValue') {
		updateMain()
	} else if (operation == 'fullValues') {
		updateMain()
		updateHistoric()
	} else if (operation == 'error1') {
		// updateHistoric('<div class="error"> </div>')
		updateHistoric('<div class="error"> not implemented </div>')
	} else if (operation == 'error2') {
		updateHistoric('<div class="error">duplicate dot</div>')
	} else if (operation == 'error3') {
		updateHistoric('<div class="error">insert a value</div>')
	} else if (operation == 'error4') {
		updateHistoric('<div class="error">not divide by 0</div>')
	}

}
