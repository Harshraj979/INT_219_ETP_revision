"use strict";
// 7. webpage that demonstrates asynchoronous data loading using promises.
// add a button labeled"load user profiles" when the button is clicked:
// -display "loading profiles..." message
// -use a promise to stimulate fetching user profile data after a delay
// -display the list of profiles including username email address once the promise resolves.
// define the appropriate typescript types for the user profile data.
function loadUserProfiles() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = [
                {
                    name: "harsh",
                    email: "abc@gmail.com"
                },
                {
                    name: "Kartikey",
                    email: "def@gmail.com"
                },
                {
                    name: "joey",
                    email: "ghi@gmail.com"
                }
            ];
            resolve(data);
        }, 3000);
    });
}
const btn = document.getElementById('btn');
const output = document.getElementById('output');
btn?.addEventListener("click", () => {
    if (output) {
        output.innerText = "Loading profiles..";
        loadUserProfiles().then((users) => {
            output.innerText = "";
            users.map((user) => {
                output.innerHTML += user.name + " - " + user.email + "<br>";
            });
        });
    }
});
