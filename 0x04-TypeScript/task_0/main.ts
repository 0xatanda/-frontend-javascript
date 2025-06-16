interface Student {
    firstname: string,
    lastname: string,
    age: number,
    location: string
}

const student1: Student = {
    firstname: "atanda0x",
    lastname: "nafiu",
    age: 20,
    location: "Alagomeji"
}


const student2: Student = {
    firstname: "kola",
    lastname: "Ishola",
    age: 20,
    location: "Bornoway"
}

const studentList: Student[] = [student1, student2];

const studentTable = document.createElement("table");
const studentHeaderRow = document.createElement('tr');
studentHeaderRow.innerHTML = "<th>First Name</th><th>Location</th>";
studentTable.appendChild(studentHeaderRow);

studentList.forEach((student) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${student.firstname}</td><td>${student.location}</td>`;
    studentTable.append(row)
});

document.body.appendChild(studentTable);