
const submitButton = document.querySelector('#add');

const fieldOne = document.querySelector('#first');
const fieldTwo = document.querySelector('#second');

const resultValue = document.querySelector('#resultValue');

submitButton.addEventListener('click', () => {
    const valueOne = +fieldOne.value;
    const valueTwo = +fieldTwo.value;
    const result = valueOne + valueTwo;
    console.log(valueOne + valueTwo);
    // alert(` Addition is: ${valueOne + valueTwo}`);
    resultValue.innerHTML = result;
} );
const submitButton1 = document.querySelector('#sub');
submitButton1.addEventListener('click', () => {
    const valueOne = +fieldOne.value;
    const valueTwo = +fieldTwo.value;
    const result = valueOne - valueTwo;
    console.log(valueOne - valueTwo);
    // alert(` Addition is: ${valueOne + valueTwo}`);
    resultValue.innerHTML = result;
} );
const submitButton2 = document.querySelector('#mul');
submitButton2.addEventListener('click', () => {
    const valueOne = +fieldOne.value;
    const valueTwo = +fieldTwo.value;
    const result = valueOne*valueTwo;
    console.log(valueOne*valueTwo);
    // alert(` Addition is: ${valueOne + valueTwo}`);
    resultValue.innerHTML = result;
} );
const submitButton3 = document.querySelector('#div');
submitButton3.addEventListener('click', () => {
    const valueOne = +fieldOne.value;
    const valueTwo = +fieldTwo.value;
    const result = valueOne/valueTwo;
    console.log(valueOne/valueTwo);
    // alert(` Addition is: ${valueOne + valueTwo}`);
    resultValue.innerHTML = result;
} );

