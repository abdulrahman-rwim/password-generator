const generateBtn = document.querySelector(".generate");
const copyBtn = document.querySelector(".copy");
const alertBox = document.querySelector(".alert-box");
const password = document.querySelector(".password");
const passwordCharacters =
  "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@#$&";
const passwordCount = 10;
generateBtn.onclick = () => {
  let emptyPassword = "";
  for (let i = 0; i < passwordCount; i++) {
    emptyPassword +=
      passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
  }
  password.value = emptyPassword;
};
copyBtn.onclick = () => {
  password.select();
  document.execCommand("copy");
  alertBox.classList.add("active");
  alertBox.innerHTML = `new password copied! </br> ${password.value}`;
  setTimeout(function () {
    alertBox.classList.remove("active");
  }, 1000);
};
