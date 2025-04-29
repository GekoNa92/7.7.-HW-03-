function calculate(a, b, operator) {
    if (operator === '+') {return a + b;}
    else if (operator === '-') {return a - b;}
    else if (operator === '/') {return a / b;}
    return 0;}
    const calc = calculate.apply( null, [2, 3, "+"]);
  console.log(calc);