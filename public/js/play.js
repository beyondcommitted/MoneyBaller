document.querySelector("#next").addEventListener("click", nextRoundHandeler);
function nextRoundHandeler() {
  console.log("hello");
  if (totalValue > 4) {
    document.getElementById("LDS").style.backgroundColor = "white";
    document.getElementById("LDS").style.color = "rgb(168, 63, 57)";
    alert("You Made it to the LDS!");
  }
  if (totalValue > 7) {
    document.getElementById("LCS").style.backgroundColor = "white";
    document.getElementById("LCS").style.color = "rgb(168, 63, 57)";
    alert("You Made it to the LCS!");
  }
  if (totalValue > 9) {
    document.getElementById("WorldSeries").style.backgroundColor = "white";
    document.getElementById("WorldSeries").style.color = "rgb(168, 63, 57)";
    alert("You Won The World Series!");
  }
}
let totalValue =10;
