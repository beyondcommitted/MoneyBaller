const managerLoginHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const managerLogin = document.querySelector("#managerName").value.trim();
  const password = document.querySelector("#managerPassword").value.trim();

  if (managerLogin && password) {
    // Send a POST request to the API endpoint
    const response = await fetch("/api/managers/login", {
      method: "POST",
      body: JSON.stringify({name: managerLogin, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace("/teampage");
    } else {
      alert(response.statusText);
    }
  }
};
const createManagerHandler = async (event) => {
  event.preventDefault();
  console.log("hello");
  const createManager = document.querySelector("#newManagerNameInput").value.trim();
  const createManager = document
    .querySelector("#newManagerNameInput")
    .value.trim();
    console.log(createManager);
  const password = document.querySelector("#newPasswordInput").value.trim();

  if (createManager && password) {
    const response = await fetch("/api/managers/signup", {
      method: "POST",
      body: JSON.stringify({ name: createManager, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/teampage');
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector("#signInBtn")
  .addEventListener("click", managerLoginHandler);

document
  .querySelector("#newManagerBtn")
  .addEventListener("click", createManagerHandler);
