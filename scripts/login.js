import navbar from "../component/navbar.js";
let nav =document.getElementById("navbar")
nav.innerHTML= navbar();


let login = async () => {
  let user_data = {
    username: document.getElementById("username").value,
    password: document.getElementById("password").value,
  };

  user_data = JSON.stringify(user_data);

  let res = await fetch("https://masai-api-mocker.herokuapp.com/auth/login", {
    method: "POST",
    body: user_data,

    headers: {
      "Content-Type": "application/json",
    },
  });

  let data = await res.json();

  let username = document.getElementById('username').value;
  getUserDetail(username, data.token);
  console.log("Data",data);
  if(data.error===false)
  {
    alert("Logged in")
  }
};

document.getElementById("submit").addEventListener("click", login);

let getUserDetail = async (username, token) => {
   
  let res = await fetch(
    `https://masai-api-mocker.herokuapp.com/user/${username}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  let data = await res.json();
  console.log("user data: ", data);
  localStorage.setItem("userdata",JSON.stringify(data))
  window.location.href="index.html"
};