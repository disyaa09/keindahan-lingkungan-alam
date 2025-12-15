// Username & password demo
const USERNAME = "admin";
const PASSWORD = "12345";

function login() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;
    const error = document.getElementById("error");

    if (user === USERNAME && pass === PASSWORD) {
        document.getElementById("loginBox").style.display = "none";
        document.getElementById("dashboard").style.display = "block";
        error.textContent = "";
    } else {
        error.textContent = "Username atau password salah!";
    }
}

function logout() {
    document.getElementById("dashboard").style.display = "none";
    document.getElementById("loginBox").style.display = "block";
}
