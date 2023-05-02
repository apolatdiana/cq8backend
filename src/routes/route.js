const express = require('express')
const router = express.Router()
const studentSchema = require('../model/studentSchema')



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
  


module.exports = router;