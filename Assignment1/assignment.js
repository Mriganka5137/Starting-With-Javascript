var access1 = document.getElementById("demo");
access1.style.borderColor = "green";

var access2 = document.querySelectorAll(".demo");
access2[0].style.border = "1px solid blue";
access2[1].style.border = "1px solid blue";

access2[1].innerHTML = "Second Elements of Class";
