const express = require('express')
const router = express.Router()
const studentSchema = require('../model/studentSchema')


// post router
router.post('/registerStudent', async(req, res) => {
    const data = req.body 
    try {
        const student = new studentSchema(data)
        await student.save()
        return res.send(student).status(200)

}catch (error) {
        res.send(error).status(400)
      
    }
});
  
// get router
router.get('/registerStudent', async (req, res) => {
    const data = req.body
    try {
        const student = await studentSchema.find(data)
        res.status(200).send(student)
    } catch (error) {
        res.send(error).status(400)
    }
})

module.exports = router;