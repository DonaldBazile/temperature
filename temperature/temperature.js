function convertTemp(fahrenheit) {
    const celsius = (fahrenheit - 32) / 1.8
    return celsius.toFixed(2);
}
console.log(convertTemp(78))


//fahrenheit = (celsius - 32) * .5556
//celsius = (fahrenheit - 32) / 1.8
