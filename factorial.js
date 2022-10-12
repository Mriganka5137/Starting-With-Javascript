var factorial = function fact(n) {
  var result = 1;
  for (var i = 1; i <= n; i++) {
    result = result * i;
  }
  return result;
};

function nCr(n, r, factorial) {
  return factorial(n) / (factorial(r) * factorial(n - r));
}

var ans = nCr(10, 2, factorial);
console.log(ans);
