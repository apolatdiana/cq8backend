link ="http://localhost:5000/registerStudent"

//fetching all the todos

const fetchAllStudents = (student) => {
    const studentData = JSON.stringify(student);
    fetch(link, {
        method: "GET",
        body: studentData,
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    })
        .then((res) => res.json())
        .then((data) => { 
            data.forEach((student) => {
                
                listStudents(student)
            })
        })
        .catch((error) => { console.log(error) })
        
}
fetchAllStudents();//invoking the fetchAll students funtion

//creating dymanic table
const tableBody = document.getElementById("tableBody")

const listStudents = (student) => {
    const { firstName, lastName, email, age } = student
    
   
    const tableRow = document.createElement("tr")

    const firstNameTd = document.createElement("td")
    firstNameTd.innerHTML = firstName
    tableRow.appendChild(firstNameTd)

    const lastNameTd = document.createElement("td")
    lastNameTd.innerHTML = lastName
    tableRow.appendChild(lastNameTd)

    const emailTd = document.createElement("td")
    emailTd.innerHTML = email
    tableRow.appendChild(emailTd)

    const ageTd = document.createElement("td")
    ageTd.innerHTML = age
    tableRow.appendChild(ageTd)

tableBody.appendChild(tableRow)

}