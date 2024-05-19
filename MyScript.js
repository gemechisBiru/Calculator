let expression = '';

function appendNumber(num) {
    expression += num;
    document.getElementById('display').value = expression;
}

function appendOperator(operator) {
    if (expression !== '' && !isNaN(expression[expression.length - 1])) {
        expression += operator;
        document.getElementById('display').value = expression;
    }
}

function clearDisplay() {
    expression = '';
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        const result = eval(expression);
        if (!isFinite(result)) {
            throw new Error('Division by zero');
        }
        document.getElementById('display').value = result;
        expression = '';
    } catch (error) {
        if (error.message === 'Division by zero') {
            document.getElementById('display').value = 'Error';
        } else {
            console.error(error); 
            document.getElementById('display').value = 'Error';
        }
    }
}
