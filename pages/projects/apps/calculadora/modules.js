import inputs from './modules/inputsControl.js'

// Create global variables
var actualValue = '0'
var historicInput = ['0000']

// Operator functions
let division = document.querySelector('.division')
let multiplication = document.querySelector('.multiplication')
let percent = document.querySelector('.percent')
let subtraction = document.querySelector('.subtraction')
let sum = document.querySelector('.sum')

division.addEventListener('click', () => {
	[actualValue, historicInput] = inputs('operation', '/', actualValue, historicInput)
})
multiplication.addEventListener('click', () => {
	[actualValue, historicInput] = inputs('operation', 'X', actualValue, historicInput)
})
percent.addEventListener('click', () => {
	[actualValue, historicInput] = inputs('operation', '%', actualValue, historicInput)
})
subtraction.addEventListener('click', () => {
	[actualValue, historicInput] = inputs('operation', '-', actualValue, historicInput)
})
sum.addEventListener('click', () => {
	[actualValue, historicInput] = inputs('operation', '+', actualValue, historicInput)
})

// Auxiliary functions 
let point = document.querySelector('.point')
let resulte = document.querySelector('.resulte')
let sign = document.querySelector('.signal')

point.addEventListener('click', () => {
	[actualValue, historicInput] = inputs('operation', '.', actualValue, historicInput)
})
resulte.addEventListener('click', () => {
	[actualValue, historicInput] = inputs('operation', '=', actualValue, historicInput)
})
sign.addEventListener('click', () => {
	[actualValue, historicInput] = inputs('operation', '-1', actualValue, historicInput)
})

// Other Functions
let clearAl = document.querySelector('.clearAll')
let clearElement = document.querySelector('.clearElement')

clearAl.addEventListener('click', () => {
	[actualValue, historicInput] = inputs('operation', 'ca', actualValue, historicInput)
})
clearElement.addEventListener('click', () => {
	[actualValue, historicInput] = inputs('operation', 'ce', actualValue, historicInput)
})

// Function for digtis
let num0 = document.querySelector('.zero')
let num1 = document.querySelector('.one')
let num2 = document.querySelector('.two')
let num3 = document.querySelector('.three')
let num4 = document.querySelector('.four')
let num5 = document.querySelector('.five')
let num6 = document.querySelector('.six')
let num7 = document.querySelector('.seven')
let num8 = document.querySelector('.eigth')
let num9 = document.querySelector('.nine')

num0.addEventListener('click', () => {
	[actualValue, historicInput] = inputs('number', '0', actualValue, historicInput)
});
num1.addEventListener('click', () => {
	[actualValue, historicInput] = inputs('number', '1', actualValue, historicInput)
});
num2.addEventListener('click', () => {
	[actualValue, historicInput] = inputs('number', '2', actualValue, historicInput)
});
num3.addEventListener('click', () => {
	[actualValue, historicInput] = inputs('number', '3', actualValue, historicInput)
});
num4.addEventListener('click', () => {
	[actualValue, historicInput] = inputs('number', '4', actualValue, historicInput)
});
num5.addEventListener('click', () => {
	[actualValue, historicInput] = inputs('number', '5', actualValue, historicInput)
});
num6.addEventListener('click', () => {
	[actualValue, historicInput] = inputs('number', '6', actualValue, historicInput)
});
num7.addEventListener('click', () => {
	[actualValue, historicInput] = inputs('number', '7', actualValue, historicInput)
});
num8.addEventListener('click', () => {
	[actualValue, historicInput] = inputs('number', '8', actualValue, historicInput)
});
num9.addEventListener('click', () => {
	[actualValue, historicInput] = inputs('number', '9', actualValue, historicInput)
});
