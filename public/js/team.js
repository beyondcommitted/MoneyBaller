const createTeamHandler = async (event) => {
    event.preventDefault();
    console.log("hello");
    const teamName = document.querySelector("newTeamName").value.trim();
    const fielder = document.querySelector("playerSelectF").value.trim();
    const pitcher = document.querySelector("playerSelectP").value.trim();
    const hitter = document.querySelector("playerSelectH").value.trim();

    if ( teamName && fielder && pitcher && hitter) {
      const response = await fetch("/api/team", {
        method: "POST",
        body: JSON.stringify({ createTeam: teamName, fielder, pitcher, hitter}),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        document.location.replace("/teampage");
      } else {
        alert(response.statusText);
      }
    }
    console.log(createTeam);
  };
  document
  .querySelector("#finishBtnId")
  .addEventListener("click", createTeamHandler);

  