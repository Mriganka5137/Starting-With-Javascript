var toggle = document.getElementById("toggle");
var bg = document.getElementsByTagName("h3");
toggle.addEventListener("click", function () {
  var color = bg[0].style.color;
  if (color === "black") {
    bg[1].style.color = "green";
  }
});
