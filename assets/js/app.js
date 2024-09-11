const output = document.querySelector('.calculator-display .output')
const allClear = document.getElementById('allClear');
const equals = document.getElementById('equals');
const keys = document.querySelectorAll('.calculator-keys button');

for (var i = 0; i < keys.length; i++) {
	const value = keys[i].value;
	console.log(value);
	keys[i].addEventListener('click', () => {
		output.value += value;
		console.log(output.value);
	});
}

allClear.addEventListener('click', (e) => {
	e.preventDefault();
	output.value = '';
});

equals.addEventListener('click', () => {
	try {
        const result = eval(output.value);
        output.value = result;
    } catch (error) {
        output.value = 'Error';
    }
});