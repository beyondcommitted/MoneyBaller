
 const teamName = document.querySelector("#newTeamName").value.trim();
    const fielder = document.querySelector("#playerSelectF");
    const pitcher = document.querySelector("#playerSelectP");
    const hitter = document.querySelector("#playerSelectH");
  const fielderChoice = fielder.options[fielder.selectedIndex].text;
  const pitcherChoice = pitcher.options[pitcher.selectedIndex].text;
  const hitterChoice = hitter.options[hitter.selectedIndex].text;

console.log(fielderChoice);
console.log(pitcherChoice);
console.log(hitterChoice);
const createTeamHandler = async (event) => {
    event.preventDefault();
    console.log("hello");
   

    if ( teamName &&  fielderChoice && pitcherChoice && hitterChoice) {
      const response = await fetch("/api/team", {
        method: "POST",
        body: JSON.stringify({ teamData: teamName, fielder, pitcher, hitter}),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        document.location.replace("/teampage");
      } else {
        alert(response.statusText);
      }
    }
   
  };
  document
  .querySelector("#finishBtnId")
  .addEventListener("click", createTeamHandler);



 