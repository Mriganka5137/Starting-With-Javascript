var student = {
  name: "Mriganka",
  age: 24,
  roll_no: 5137,
};

student.address = {
  City: "Golaght",
  State: "Assam",
};

console.log(student);
delete student.roll_no;
console.log(student);

console.log(student["address"]["City"]);
console.log(student["address"].City);
console.log(student.address["City"]);
Object.getOwnPropertyNames;
