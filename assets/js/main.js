
let parol = document.getElementById("input")


function par() {
    if (parol.type == "password") {
      parol.type = "text"
    } else {
      parol.type = "password"
    }
  }