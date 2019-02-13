// Compose performs a right-to-left function composition
// compose is a high order function. It is a function that returns another function.
// compose takes multiple functions as arguments and we convert them into an array of functions using the spread opeartor: ...
// Then we simply apply a reduceRight on those functions. The first parameter of the callback is the current argument.
// The second argument is the current function.
// Then we call each function with the current argument and the result is use for the next call.
export default function compose(...funcs) {
  if (funcs.length === 0) {
    return;
  }
  if (funcs.length === 1) {
    return func[0];
  }
  return function(arg) {
    return funcs.reduceRight((acc, fn) => {
      return fn(acc);
    }, arg);
  };
}
