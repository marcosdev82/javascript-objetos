// ⚠️ Warning: Executing JavaScript from a string is an enormous security risk. 
// It is far too easy for a bad actor to run arbitrary code when you use eval(). 
// See Never use direct eval()!, below.

// -------

// A eval()função avalia o código JavaScript representado como uma string e retorna seu valor de conclusão. 
// O código-fonte é analisado como um script.

console.log(eval("2 + 2"));
// Expected output: 4

console.log(eval(new String("2 + 2")));
// Expected output: 2 + 2

console.log(eval("2 + 2") === eval("4"));
// Expected output: true

console.log(eval("2 + 2") === eval(new String("2 + 2")));
// Expected output: false

