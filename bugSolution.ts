function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number | string, b: number | string): number {
  const numA = typeof a === 'string' ? parseInt(a, 10) : a;
  const numB = typeof b === 'string' ? parseInt(b, 10) : b;
  return numA + numB;
}

let result1 = addSafe(1, "2"); // Works correctly now
let result2 = addSafe(1, 2); // Works correctly now
let result3 = addSafe("1", "2"); // Works correctly now