const characterRange = document.getElementById("characterRange");
const characterNumber = document.getElementById("characterNumber");
const upperCaseElements = document.getElementById("includeUpper");
const lowerCaseElements = document.getElementById("includeLower");
const numberElements = document.getElementById("includeNumbers");
const symbolElements = document.getElementById("includeSymbols");
const formID = document.getElementById("passwordForm");
const passwordDisplay = document.getElementById("passwordDisplay");

const UPPEER_CASE_ARRAY = getAsciiArray(65, 90);
const LOWER_CASE_ARRAY = getAsciiArray(97, 122);
const NUMBERS_ARRAY = getAsciiArray(48, 57);
const SYMBOLS_ARRAY = getAsciiArray(33, 47)
  .concat(getAsciiArray(58, 64))
  .concat(getAsciiArray(91, 96));

characterNumber.addEventListener("input", syncAmount);
characterRange.addEventListener("input", syncAmount);

formID.addEventListener("submit", e => {
  e.preventDefault();
  const charAmount = characterNumber.value;
  const includeUpper = upperCaseElements.checked;
  const includeLower = lowerCaseElements.checked;
  const includeNumbers = numberElements.checked;
  const includeSymbols = symbolElements.checked;
  const password = randomPassword(
    charAmount,
    includeUpper,
    includeLower,
    includeNumbers,
    includeSymbols
  );

  passwordDisplay.innerText = password;
});

copy.addEventListener("click", () => {
  const textarea = document.createElement("textarea");
  const password = passwordDisplay.innerText;

  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  let alertbox = document.getElementById("alert");
  alertbox.innerHTML = "Password Copied to Clipboard";
  alertbox.classList.add("success");
  setTimeout(function() {
    alertbox.classList.remove("success");
  }, 1000);
});

function randomPassword(
  charAmount,
  includeUpper,
  includeLower,
  includeNumbers,
  includeSymbols
) {
  let passCode = [];
  if (includeLower) {
    passCode = passCode.concat(LOWER_CASE_ARRAY);
  }
  if (includeUpper) {
    passCode = passCode.concat(UPPEER_CASE_ARRAY);
  }
  if (includeNumbers) {
    passCode = passCode.concat(NUMBERS_ARRAY);
  }
  if (includeSymbols) {
    passCode = passCode.concat(SYMBOLS_ARRAY);
  }

  if (passCode == "") {
    let alertbox = document.getElementById("alert");
    alertbox.innerHTML = "Please Select Options Before Generating";
    alertbox.classList.add("fail");
    setTimeout(function() {
      alertbox.classList.remove("fail");
    }, 3000);
  }
  const passCharacters = [];
  for (let i = 0; i <= charAmount; i++) {
    const characterCode = passCode[Math.floor(Math.random() * passCode.length)];
    passCharacters.push(String.fromCharCode(characterCode));
  }

  return passCharacters.join("");
}

function syncAmount(e) {
  const amount = e.target.value;
  characterRange.value = amount;
  characterNumber.value = amount;
}

function getAsciiArray(low, high) {
  const asciiArray = [];
  for (let i = low; i < high; i++) {
    asciiArray.push(i);
  }
  return asciiArray;
}

function generatePassword(e) {
  e.preventDefault();
  const charAmount = characterNumber.value;
  const includeUpper = upperCaseElements.checked;
  const includeLower = lowerCaseElements.checked;
  const includeNumbers = numberElements.checked;
  const includeSymbols = symbolElements.checked;
  const password = randomPassword(
    charAmount,
    includeUpper,
    includeLower,
    includeNumbers,
    includeSymbols
  );

  passwordDisplay.innerText = password;
}
