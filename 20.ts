
interface Student{
    name:string,
    age:number,
    course:string
}
const students: Student[] =
[
    {
        name:"Harsh",
        age:20,
        course:"Math"
    },
    {
        name:"Harsh",
        age:20,
        course:"Math"
    },
    {
        name:"Harsh",
        age:20,
        course:"Math"
    },
];
const container=document.getElementById('container') as HTMLDivElement;
students.forEach((student)=>{
    const div=document.createElement('div');
    div.innerHTML=`
        <h2>${student.name}</h2>
        <p>Age: ${student.age}</p>
        <p>Course: ${student.course}</p>
        <hr>
    `;
    container.appendChild(div);
})