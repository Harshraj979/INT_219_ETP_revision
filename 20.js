"use strict";
const students = [
    {
        name: "Harsh",
        age: 20,
        course: "Math"
    },
    {
        name: "Harsh",
        age: 20,
        course: "Math"
    },
    {
        name: "Harsh",
        age: 20,
        course: "Math"
    },
];
const container = document.getElementById('container');
students.forEach((student) => {
    const div = document.createElement('div');
    div.className="card";
    div.innerHTML = `
        <h2>${student.name}</h2>
        <p>Age: ${student.age}</p>
        <p>Course: ${student.course}</p>
        <hr>
    `;
    container.appendChild(div);
});
