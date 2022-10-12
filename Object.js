var student = { name: "Mriganka", roll_no: 5137, semester: 5 };
// console.log(student.name);
// student.address = "Golaghat";
// console.log(student);
// student.address = "Khumtai";
// console.log(student);

// student.-house-no is invalid

student["-house-no"] = 38;
// console.log(student["-house-no"]);
student["2"] = "hello";
// console.log(student);

// Delete properties in object

// delete student["2"];
// console.log(student);

// delete student["-house-no"];
// console.log(student);

// Iterating the Object Properties
// for (var ele in student) {
//   console.log(ele, student[ele]);
// }

// var keys = Object.keys(student);
// console.log(keys);

student.address = { village: "Khumtai", District: "Golaghat", Pin: 785619 };
console.log(student.address.District);
console.log(student.address["village"]);
