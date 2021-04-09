console.log("hello world!");

const managerLoginHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const managerLogin = document.querySelector("#manager-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (managerLogin && password) {
    // Send a POST request to the API endpoint
    const response = await fetch("/api/managers/", {
      method: "POST",
      body: JSON.stringify({ name: managerLogin, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace("/draft");
    } else {
      alert(response.statusText);
    }
  }
};
  const createManagerHandler = async (event) => {
    event.preventDefault();
    console.log("hello")
    const createManager = document
      .querySelector("#manager-signup")
      .value.trim();
    const password = document.querySelector("#password-signup").value.trim();

    if (createManager && password) {
      const response = await fetch("/api/managers", {
        method: "POST",
        body: JSON.stringify({ name: createManager, password }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        document.location.replace("/draft");
      } else {
        alert(response.statusText);
      }
    }
    console.log(createManager)
  
};


document
  .querySelector(".loginManager")
  .addEventListener("click", managerLoginHandler);

document
  .querySelector("#newManager")
  .addEventListener("click", createManagerHandler);


