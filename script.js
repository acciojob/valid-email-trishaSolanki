function validEmail(str) {
  //your JS code here.
const emailPettern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailPettern.test(email);
}

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
