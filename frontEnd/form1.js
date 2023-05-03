const url = "http://localhost:5000/registerStudent";

//Create a new student
const createStudent = (student) => {
  const studentData = JSON.stringify(student);
  fetch(url, { 
      method: "POST", 
      
      body: studentData,
      headers: {
       "Accept": "application/json",
       "Content-Type": "application/json"
      }
  })
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data);
      })
    .catch((error)=>{console.log(error)});
  }


const firstNameInput = document.getElementById('firstName')
const lastNameInput = document.getElementById('lastName')
const emailInput= document.getElementById('email')
const ageInput = document.getElementById('age')
const saveBtn = document.getElementById('saveBtn')

const getElementValue = (element) => {
    return element.value
}

saveBtn.addEventListener("click", (event) => {
    event.preventDefault()

    const firstNameValue = getElementValue(firstNameInput)
    const lastNameValue = getElementValue(lastNameInput)
    const emailValue = getElementValue(emailInput)
    const ageValue = getElementValue(ageInput)

    const student = { firstName: firstNameValue, lastName: lastNameValue, email: emailValue, age: ageValue }
         createStudent(student)
     
})
