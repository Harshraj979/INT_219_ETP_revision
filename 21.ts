const form = document.getElementById("form") as HTMLFormElement;
const nameInput = document.getElementById("name") as HTMLInputElement;
const ageInput = document.getElementById("age") as HTMLInputElement;
const emailInput = document.getElementById("email") as HTMLInputElement;
const nameError = document.getElementById("nameError") as HTMLSpanElement;
const ageError = document.getElementById("ageError") as HTMLSpanElement;
const emailError = document.getElementById("emailError") as HTMLSpanElement;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    nameError.innerText = "";
    ageError.innerText = "";
    emailError.innerText = "";

    let valid = true;
    if (nameInput.value == "") {
        nameError.innerText = "Name is required";
        valid = false;
    }
    if (Number(ageInput.value) <= 0) {
        ageError.innerText = "Enter valid age";
        valid = false;
    }
    if (!emailInput.value.includes("@")) {
        emailError.innerText = "Invalid email";
        valid = false;
    }
    if (valid) {
        alert("Form Submitted Successfully");
    }
});