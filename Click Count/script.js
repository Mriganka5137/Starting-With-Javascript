var boxClick = document.getElementById("box");
var clickcount = document.getElementById("count-id");
count = 0;
boxClick.addEventListener("click", function () {
  count++;
  clickcount.innerText = count + " ";
});
