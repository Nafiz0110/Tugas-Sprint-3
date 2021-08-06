var statsEmail = false;
var statsPassword = false;

function login(email, password) {
  if (email == "nafiz@gmail.com") {
    if (password == "nafiz") {
      document.write("halaman home");
      statsEmail = true;
      statsPassword = true;
    } else {
      document.write("password yang anda masukkan salah");
    }
  } else {
    document.write("email yang anda masukkan salah");
  }
}

do {
  login(prompt("masukkan email anda"), prompt("msukkan password anda"));
} while (!statsEmail && !statsPassword);z
