type Course = "BCA" | "BTECH" | "MBA";
interface Student {
    name: string,
    age: number,
    course: Course;
}
const student: Student[] = [
    {
        name: "Harsh",
        age: 20,
        course: "BCA"
    },
    {
        name: "Rahul",
        age: 22,
        course: "BTECH"
    },
    {
        name: "Aman",
        age: 24,
        course: "MBA"
    }
];
function displayStudent(data:Student[]){
    const container=document.getElementById("container")!;
    data.forEach((student)=>{
        container.innerHTML+=
            "<h3>" + student.name + "</h3>" +
            "<p>Age: " + student.age + "</p>" +
            "<p>Course: " + student.course + "</p><hr>";
    })
}
