import { Operation } from "./types";

const operations: Record<Operation, (a: number, b: number) => number> = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => {
    if (b === 0) {
      console.error("Error: Cannot divide by zero.");
      return a;
    }
    return a / b;
  }
};

function operator(a: number, b: number, operation: Operation): number {
 if (!operations[operation]) {
    console.error("Error: Invalid operation.");
    return a;
  }

  return operations[operation](a, b);
}

export function calculate(num: any): any {
  let result;

  result = operator(num, 5, "add");
  result = operator(result, 2, "divide");
  result = operator(result, 3, "multiply");
  result = operator(result, 3, "add");
  if (result !== 18) {
    result = operator(result, 11, "subtract");
  }

  return result;
}
