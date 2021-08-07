let username = "nafiz9197";
let password = "112233";

function Login(username, password) {
  if (username == "nafiz9197" && password == "112233") {
    function goHome() {
      console.log("Halaman Home");
    }

    return goHome;
  } else {
    if (username == "nafiz9197") {
      if (password == "112233") {
        function goHome() {
          console.log("Halaman Home");
        }

        return goHome;
      } else {
        function backLogin() {
          console.log("Login Gagal");
        }

        return backLogin;
      }
    } else {
      function backLogin() {
        console.log("Login Gagal");
      }

      return backLogin;
    }
  }
}

let userName = prompt("Masukan Username");
let passWord = prompt("Masukan Password");

const cobaLogin = Login(userName, passWord);

cobaLogin();
