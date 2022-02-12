/* Validate new values, signal operations and dot */
import display from "./displayControl.js"

export function dotValidation(actualValue) {
	let hasDot = (actualValue.split('.').length == 2) ? true : false
	if (hasDot) {
		display('error2')
	} else {
		actualValue += '.'
		display('actualValue', actualValue)
	}

	return actualValue
}

export function numberValidation(newValue, actualValue) {
	if (actualValue === '0') {
		display('actualValue', newValue)
		return newValue
	} else {
		actualValue += newValue
		display('actualValue', actualValue)
		return actualValue
	}
}

export function signalValidation(actualValue) {
	let newValue = parseFloat(actualValue) * (-1)
	display('actualValue', String(newValue))

	return String(newValue)
}
