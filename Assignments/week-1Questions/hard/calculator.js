/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result done
    - subtract: takes a number and subtracts it from the result done
    - multiply: takes a number and multiply it to the result done
    - divide: takes a number and divide it to the result done
    - clear: makes the `result` variable to 0 done
    - getResult: returns the value of `result` variable done 
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor() {
    this.result = 0;
  }

  add(num) {
    this.result += num;
  }

  subtract(num) {
    this.result -= num;
  }

  multiply(num) {
    this.result *= num;
  }
  divide(num) {
    if (num === 0) throw new Error('Cannot divide by zero');
    this.result /= num;
  }
  clear() {
    this.result = 0;
  }
  getResult() {
    return this.result;
  }
  calculate(expression) {
    // Remove all whitespace to handle expressions with extra spaces
    expression = expression.replace(/\s+/g, '');

    // Check if the expression contains only valid characters
    if (/[^0-9+\-*/().]/.test(expression)) {
      throw new Error('Invalid input'); // invalid characters found
    }

    // Evaluate the expression
    try {
      this.result = eval(expression);
    } catch (error) {
      throw new Error('Invalid expression');
    }
  }
}




module.exports = Calculator;
