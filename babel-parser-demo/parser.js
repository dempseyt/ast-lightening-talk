const { parse } = require("@babel/parser");

// const code = "2 + (4 * 10)";

// const ast = parse(code);

// console.log(ast);

// ------------------------------------------------

// const code = "2 + (4 * 10)";

// const ast = parse(code);

// console.log(ast.program.body[0]);

// ---------------------------------------------------

const code = "2 + (4 * 10)";

const ast = parse(code);

console.log(ast.program.body[0].expression.left.value);
console.log(ast.program.body[0].expression.right.left.value);
console.log(ast.program.body[0].expression.right.right.value);
