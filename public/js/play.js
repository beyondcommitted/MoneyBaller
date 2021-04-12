document.querySelector("#next").addEventListener("click", nextRoundHandeler);
function nextRoundHandeler() {
    
    var fielder = document.getElementById("fielder");
    var fielderwar = fielder.options[fielder.selectedIndex].value;
    var pitcher = document.getElementById("pitcher");
    var pitcherwar = pitcher.options[pitcher.selectedIndex].value;
    var hitter = document.getElementById("hitter");
    var hitterwar = hitter.options[hitter.selectedIndex].value;
    
  console.log(fielderwar);
  console.log(pitcherwar);
  console.log(hitterwar);
  let war = +fielderwar + +pitcherwar + +hitterwar; 
   
console.log(war)

document.getElementById("warscore").append(war);
  if (war > 10) {
    document.getElementById("LDS").style.backgroundColor = "white";
    document.getElementById("LDS").style.color = "rgb(168, 63, 57)";
    alert("You Made it to the LDS!");
  }
  if (war > 14) {
    document.getElementById("LCS").style.backgroundColor = "white";
    document.getElementById("LCS").style.color = "rgb(168, 63, 57)";
    alert("You Made it to the LCS!");
  }
  if (war > 30) {
    document.getElementById("WorldSeries").style.backgroundColor = "white";
    document.getElementById("WorldSeries").style.color = "rgb(168, 63, 57)";
    alert("You Won The World Series!")
}
       
};