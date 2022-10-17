var toggleButton = document.getElementById("toggle");

toggleButton.addEventListener("click", function () {
  var body = document.body;
  var heading = document.getElementsByTagName("h3");
  if (body.style.backgroundColor == "white") {
    document.body.style.backgroundColor = "black";

    heading[0].style.color = "white";
  } else {
    document.body.style.backgroundColor = "white";
    heading[0].style.color = "black";
  }
});
