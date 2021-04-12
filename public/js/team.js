

function GetTeamName(){
  var e = document.getElementById("newTeamName");
  var teamName = e.value.trim();
  
  document.getElementById("teamName").append(teamName);
}

function GetSelectedFielder(){
  var e = document.getElementById("playerSelectF");
  var fielderChoice = e.options[e.selectedIndex].text;
  

 document.getElementById("Feilder").append(fielderChoice);
}
function GetSelectedPitcher(){
  var e = document.getElementById("playerSelectP");
  var pitcherChoice = e.options[e.selectedIndex].text;
  document.getElementById("Pitcher").append(pitcherChoice);
}

function GetSelectedHitter(){
  var e = document.getElementById("playerSelectH");
  var hitterChoice = e.options[e.selectedIndex].text;
  
  document.getElementById("Hitter").append(hitterChoice);
}

const createSaveHandler = async (event) => {
  event.preventDefault();




  
  if ( lo0) {
          const response = await fetch("/api/team", {
            method: "POST",
            body: JSON.stringify({ id, teamName, fielder, pitcher, hitter}),
            headers: { "Content-Type": "application/json" },
          });
      
          if (response.ok) {
            document.location.replace("/teampage");
          } else {
            alert(response.statusText);
          }
        }
       
      };
      

document.querySelector("#finishBtnId").addEventListener("click", GetTeamName);


document.querySelector("#finishBtnId").addEventListener("click", createSaveHandler);


document.querySelector("#finishBtnId").addEventListener("click",  GetSelectedFielder);
document.querySelector("#finishBtnId").addEventListener("click",  GetSelectedPitcher);
document.querySelector("#finishBtnId").addEventListener("click",  GetSelectedHitter);



// const createTeamHandler = async (event) => {
//     event.preventDefault();
//     console.log("hello");
   

//     if ( teamName &&  fielderChoice && pitcherChoice && hitterChoice) {
//       const response = await fetch("/api/team", {
//         method: "POST",
//         body: JSON.stringify({ id, teamName, fielder, pitcher, hitter}),
//         headers: { "Content-Type": "application/json" },
//       });
  
//       if (response.ok) {
//         document.location.replace("/teampage");
//       } else {
//         alert(response.statusText);
//       }
//     }
   
//   };
//   document
//   .querySelector("#finishBtnId")
//   .addEventListener("click", createTeamHandler);



 