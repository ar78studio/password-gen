const button1 = document.getElementById("pass1");
const button2 = document.getElementById("pass2");
const button3 = document.getElementById("pass3");
const button4 = document.getElementById("pass4");
const button5 = document.getElementById("pass5");
const button6 = document.getElementById("pass6");

function generatePass() {
  if (document.getElementById("pass-13").checked === true) {
    let randPassword1 = Array(13)
      .fill(
        "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()"
      )
      .map(function (x) {
        return x[Math.floor(Math.random() * x.length)];
      })
      .join("");
    button1.textContent = randPassword1;
    // document.getElementById('pass1').textContent = "*************"
  } else if (document.getElementById("pass-8").checked === true) {
    let randPassword1 = Array(8)
      .fill(
        "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()"
      )
      .map(function (x) {
        return x[Math.floor(Math.random() * x.length)];
      })
      .join("");
    button1.textContent = randPassword1;
    // document.getElementById('pass1').textContent = "********"
  }

  if (document.getElementById("pass-13").checked === true) {
    let randPassword2 = Array(13)
      .fill(
        "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()"
      )
      .map(function (x) {
        return x[Math.floor(Math.random() * x.length)];
      })
      .join("");
    button2.textContent = randPassword2;
  } else if (document.getElementById("pass-8").checked === true) {
    let randPassword2 = Array(8)
      .fill(
        "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()"
      )
      .map(function (x) {
        return x[Math.floor(Math.random() * x.length)];
      })
      .join("");
    button2.textContent = randPassword2;
  }

  if (document.getElementById("pass-13").checked === true) {
    let randPassword3 = Array(13)
      .fill(
        "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()"
      )
      .map(function (x) {
        return x[Math.floor(Math.random() * x.length)];
      })
      .join("");
    button3.textContent = randPassword3;
  } else if (document.getElementById("pass-8").checked === true) {
    let randPassword3 = Array(8)
      .fill(
        "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()"
      )
      .map(function (x) {
        return x[Math.floor(Math.random() * x.length)];
      })
      .join("");
    button3.textContent = randPassword3;
  }

  if (document.getElementById("pass-13").checked === true) {
    let randPassword4 = Array(13)
      .fill(
        "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()"
      )
      .map(function (x) {
        return x[Math.floor(Math.random() * x.length)];
      })
      .join("");
    button4.textContent = randPassword4;
  } else if (document.getElementById("pass-8").checked === true) {
    let randPassword4 = Array(8)
      .fill(
        "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()"
      )
      .map(function (x) {
        return x[Math.floor(Math.random() * x.length)];
      })
      .join("");
    button4.textContent = randPassword4;
  }

  if (document.getElementById("pass-13").checked === true) {
    let randPassword5 = Array(13)
      .fill(
        "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()"
      )
      .map(function (x) {
        return x[Math.floor(Math.random() * x.length)];
      })
      .join("");
    button5.textContent = randPassword5;
  } else if (document.getElementById("pass-8").checked === true) {
    let randPassword5 = Array(8)
      .fill(
        "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()"
      )
      .map(function (x) {
        return x[Math.floor(Math.random() * x.length)];
      })
      .join("");
    button5.textContent = randPassword5;
  }

  if (document.getElementById("pass-13").checked === true) {
    let randPassword6 = Array(13)
      .fill(
        "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()"
      )
      .map(function (x) {
        return x[Math.floor(Math.random() * x.length)];
      })
      .join("");
    button6.textContent = randPassword6;
  } else if (document.getElementById("pass-8").checked === true) {
    let randPassword6 = Array(8)
      .fill(
        "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()"
      )
      .map(function (x) {
        return x[Math.floor(Math.random() * x.length)];
      })
      .join("");
    button6.textContent = randPassword6;
  }
}

// WRITE GENERATED PASSWORDS TO A .TXT FILE USING FileSaver.js

$("#pass1").click(function () {
  let currentUrl = window.location.href; // declares the variable with the current browser URL address
  let blob = new Blob(
    [document.getElementById("pass1").textContent + " " + currentUrl],
    { type: "text/plain; charset=utf-8" }
  );
  saveAs(blob, "password.txt");
});

$("#pass2").click(function () {
  let currentUrl = window.location.href;
  let blob = new Blob(
    [document.getElementById("pass2").textContent + " " + currentUrl],
    { type: "text/plain; charset=utf-8" }
  );
  saveAs(blob, "password.txt");
});

$("#pass3").click(function () {
  let currentUrl = window.location.href;
  let blob = new Blob(
    [document.getElementById("pass3").textContent + " " + currentUrl],
    { type: "text/plain; charset=utf-8" }
  );
  saveAs(blob, "password.txt");
});

$("#pass4").click(function () {
  let currentUrl = window.location.href;
  let blob = new Blob(
    [document.getElementById("pass4").textContent + " " + currentUrl],
    { type: "text/plain; charset=utf-8" }
  );
  saveAs(blob, "password.txt");
});

$("#pass5").click(function () {
  let currentUrl = window.location.href;
  let blob = new Blob(
    [document.getElementById("pass5").textContent + " " + currentUrl],
    { type: "text/plain; charset=utf-8" }
  );
  saveAs(blob, "password.txt");
});

$("#pass6").click(function () {
  let currentUrl = window.location.href;
  let blob = new Blob(
    [document.getElementById("pass6").textContent + " " + currentUrl],
    { type: "text/plain; charset=utf-8" }
  );
  saveAs(blob, "password.txt");
});
