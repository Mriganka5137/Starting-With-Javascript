var arr = [1, 2, 3, 4];
function duplicate(arr) {
  // Write Logic here
  var l = arr.length;
  for (var i = 0; i < l; i++) {
    arr.push(arr[i]);
  }
  return arr;
}

duplicate(arr);
console.log(arr);
