var sec = 5;
function countDown() {
  console.log(sec);
  sec--;
  if (sec == 0) {
    console.log("GO");
    clearInterval(id);
  }
}

var id = setInterval(countDown, 1500);
