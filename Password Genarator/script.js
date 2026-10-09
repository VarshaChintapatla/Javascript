const passwordInput = document.getElementById("password");
const lengthSlider = document.getElementById("length");
const lengthDisplay = document.getElementById("length-value");
const uppercaseCheckbox = document.getElementById("uppercase");
const lowercaseCheckbox = document.getElementById("lowercase");
const numbersCheckbox = document.getElementById("numbers");
const symbolsCheckbox = document.getElementById("symbols");
const generateButton = document.getElementById("generate-btn");
const copyButton = document.getElementById("copy-btn");
const strengthBar = document.querySelector(".strength-bar");
const strengthText = document.querySelector(".strength-container p");
const strengthLabel = document.getElementById("strength-label");

const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numberCharacters = "0123456789";
const symbolCharacters = "!@#$%^&*()-_=+[]{}|;:,.<>?/";

lengthSlider.addEventListener("input", () => {
  lengthDisplay.textContent = lengthSlider.value;
});

generateButton.addEventListener("click", makepassword);

function makepassword() {
  const length = lengthSlider.value;
  const includeUppercase = uppercaseCheckbox.checked;
  const includeLowercase = lowercaseCheckbox.checked;
  const includeNumbers = numbersCheckbox.checked;
  const includeSymbols = symbolsCheckbox.checked;

  if (
    !includeUppercase &&
    !includeLowercase &&
    !includeNumbers &&
    !includeSymbols
  ) {
    alert("Please select at least one char type");
    return;
  }
  const password = createpassword(
    length,
    includeUppercase,
    includeLowercase,
    includeNumbers,
    includeSymbols,
  );

  passwordInput.value = password;
  updateStrengthMeter(password);
}

function createpassword(
  length,
  includeUppercase,
  includeLowercase,
  includeNumbers,
  includeSymbols,
) {
  let char = "";
  if (includeUppercase) char += uppercaseLetters;
  if (includeLowercase) char += lowercaseLetters;
  if (includeNumbers) char += numberCharacters;
  if (includeSymbols) char += symbolCharacters;

  let pw = "";

  for (let i = 0; i < length; i++) {
    let index = Math.floor(Math.random() * char.length);
    pw += char[index];
  }

  return pw;
}

function updateStrengthMeter(password) {
  const passwordLength = password.length;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumbers = /[0-9]/.test(password);
  const hasSymbols = /[!@#$%^&*()-_=+[\]{}|;:,.<>?]/.test(password);

  let score = 0;
  score += Math.min(passwordLength * 2, 40);

  if (hasUppercase) score += 15;
  if (hasLowercase) score += 15;
  if (hasNumbers) score += 15;
  if (hasSymbols) score += 15;

  if (passwordLength < 8) {
    score = Math.min(score, 40);
  }

  const safeScore = Math.max(5, Math.min(100, score));
  strengthBar.style.width = safeScore + "%";

  let strengthLabelText = "";
  let barColor = "";

  if (score < 40) {
    // weak password
    barColor = "#fc8181";
    strengthLabelText = "Weak";
  } else if (score < 70) {
    // Medium password
    barColor = "#fbd38d"; // Yellow
    strengthLabelText = "Medium";
  } else {
    // Strong password
    barColor = "#68d391"; // Green
    strengthLabelText = "Strong";
  }

  strengthBar.style.backgroundColor = barColor;
  strengthLabel.textContent = strengthLabelText;
}

window.addEventListener("DOMContentLoaded", makepassword);
copyButton.addEventListener("click", () => {
  if (!passwordInput.value) return;

  navigator.clipboard
    .writeText(passwordInput.value)
    .then(() => showCopySuccess())
    .catch((error) => console.log("Could not copy:", error));
});

function showCopySuccess() {
  copyButton.classList.remove("far", "fa-copy");
  copyButton.classList.add("fas", "fa-check");
  copyButton.style.color = "#48bb78";

  setTimeout(() => {
    copyButton.classList.remove("fas", "fa-check");
    copyButton.classList.add("far", "fa-copy");
    copyButton.style.color = "";
  }, 1500);
}
