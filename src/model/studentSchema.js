const mongoose = require("mongoose");
const schema = mongoose.Schema;

const studentDataSchema = new schema({
    firstName: {
        type: "String",
        required: true
        
    },
    lastName: {
        type: "String",
        required: true
    },
    email: {
        type: "String",
        required: true
    },
    age: {
        type: Number,
        required: true
    }
    
})


const codeStudents = mongoose.model("studentsList", studentDataSchema)
module.exports= codeStudents
