function foo(a, b) {
  if (b === 0) {
    return a;
  } else if (a === 0) {
    return b; 
  }
  return foo(b % a, a);
}