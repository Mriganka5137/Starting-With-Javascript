var arr = [1, 2, 3, 4];
function rotateLeft(arr) {
  var ele;
  ele = arr.shift();
  arr.push(ele);
  return arr;
}

rotateLeft(arr);
console.log(arr);
