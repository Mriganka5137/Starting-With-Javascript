function hello(a, b, c) {
  a = 7;
  b.push("Mriganka");
  c.flag = "true";
}

var x = 4;
var y = ["Rahul", "Shyam"];
var z = {
  flag: "false",
};

hello(x, y, z);
console.log(x, y, z);
