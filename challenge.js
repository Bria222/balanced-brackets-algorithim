function balancedBrackets(string) {
  // your code here
  const bracketPairs = { '[': ']', '{': '}', '(': ')' };
  const closingBrackets = new Set(Object.values(bracketPairs));
  const stack = [];

  for (char of string) {
    if (closingBrackets.has(char)) {
      if (char === stack[stack.length - 1]) stack.pop();
      else return false;
    }
    if (char in bracketPairs) stack.push(bracketPairs[char]);
  }
  return stack.length === 0;
}

console.log(balancedBrackets('(hello)[world]'))
// => true

console.log(balancedBrackets('([)]'))
// => false

console.log(balancedBrackets('[({}{}{})([])]'))
// => true

module.exports = balancedBrackets
