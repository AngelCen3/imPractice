// Selecciona el campo de entrada (input) y los botones principales de la calculadora
const display = document.getElementById('display'); // Campo de entrada donde se muestra la expresión y el resultado
const buttons = document.querySelectorAll('.buttons button'); // Todos los botones de la calculadora
const clearButton = document.getElementById('clear'); // Botón de limpiar pantalla
const backspaceButton = document.getElementById('backspace'); // Botón de retroceso (Backspace)
const equalButton = document.getElementById('equal'); // Botón de igual para calcular la expresión

// Variable para rastrear si se ha mostrado un resultado en la pantalla
let resultDisplayed = false;

// Función para limpiar la pantalla
clearButton.addEventListener('click', () => {
    display.value = ''; // Limpia el campo de entrada
    resultDisplayed = false; // Reinicia el estado de resultado mostrado
    backspaceButton.disabled = false; // Habilita el botón de retroceso
});

// Función para borrar el último carácter ingresado
backspaceButton.addEventListener('click', () => {
    // Solo permite borrar si no se ha mostrado un resultado
    if (!resultDisplayed) {
        display.value = display.value.slice(0, -1); // Elimina el último carácter del campo de entrada
    }
});

// Agrega un evento de clic a cada botón de la calculadora
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent; // Obtiene el texto del botón clickeado

        // Verifica si el botón es un número o una operación aritmética básica
        if (!isNaN(buttonText) || buttonText === '0' || buttonText === '+' || buttonText === '-' || buttonText === '*') {
            // Si el botón es un número o una operación, añade su valor al campo de entrada
            display.value += buttonText;
        }
    });
});

// Función para manejar el botón de igual y calcular la expresión
equalButton.addEventListener('click', () => {
    const expression = display.value; // Obtiene la expresión actual en el campo de entrada
    const result = calculate(expression); // Calcula el resultado usando la función calculate
    display.value = result; // Muestra el resultado en la pantalla

    resultDisplayed = true; // Marca que se ha mostrado un resultado
    backspaceButton.disabled = true; // Deshabilita el botón de retroceso para que no se pueda borrar el resultado
});

// Función para calcular la expresión aritmética ingresada
function calculate(expression) {
    // Divide la expresión en números utilizando operadores aritméticos como separadores
    const numbers = expression.split(/[\+\-\*\/]/).map(Number);
    // Extrae los operadores de la expresión
    const operators = expression.replace(/[0-9]|\./g, '').split('');

    let result = numbers[0]; // Inicializa el resultado con el primer número

    // Recorre los operadores y realiza las operaciones correspondientes
    for (let i = 0; i < operators.length; i++) {
        switch (operators[i]) {
            case '+':
                result += numbers[i + 1]; // Suma
                break;
            case '-':
                result -= numbers[i + 1]; // Resta
                break;
            case '*':
                result *= numbers[i + 1]; // Multiplicación
                break;
            case '/':
                result /= numbers[i + 1]; // División
                break;
        }        
    }
    return result; // Retorna el resultado final de la expresión
}