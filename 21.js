"use strict";
const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const emailInput = document.getElementById("email");
const nameError = document.getElementById("nameError");
const ageError = document.getElementById("ageError");
const emailError = document.getElementById("emailError");
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
