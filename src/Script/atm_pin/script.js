// ATM machines allow 4 or 6 digit PIN codes and PIN
// codes cannot contain anything but exactly 4 digits
// or exactly 6 digits.

// If the function is passed a valid PIN string,
// return true,  else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

for (let num = 0; num <= 9; num++) {
  document.getElementById(`${num}`).onclick = () => setPin(num);
}

function setPin(num) {
  document.getElementById("value").innerHTML = num;
}

const enter = document.getElementById("enter");
enter.onclick = () => validatePIN(PIN);

function validatePIN(pin) {
  console.log(pin);
}
