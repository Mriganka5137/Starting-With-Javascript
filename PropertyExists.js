function propertyExits(obj, path) {
  let val = obj;
  for (const iterator of path) {
    val = val[iterator];
    if (!val) return false;
  }

  return val;
}

var obj = {
  a: {
    b: "hello",
  },
};

var path = "ab";
let ans = propertyExits(obj, path);
console.log(ans);
