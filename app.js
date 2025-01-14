const express = require('express') 
const bodyParser = require('body-parser') 
const students = [{ 
        studentName: "Aditya Gupta",  
        studentEmail: "aditya@gmail.com",  
       studentAge: "22",  
        studentUniqueId: '1'  
    },  

    {  
       studentName: "Vanshita Jaiswal",  
        studentEmail: "vanshita@gmail.com",  
        studentAge: "21",  
        studentUniqueId: '2'  
    },  

    {  
        studentName: "Sachin Yadav",  
        studentEmail: "sachin@gmail.com",  
        studentAge: "22",  
        studentUniqueId: '3'  
    }  
] 

const app = express() 

app.set('view engine', 'ejs') 
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ 
    extended: true  
})) 

app.get("/", function (req, res) { 
    res.render("home", {  
        data: students  
    })  

}) 


 app.post("/", (req, res) => { 

    const inputstudentName = req.body.studentName  
    const inputstudentEmail = req.body.studentEmail  
    const inputstudentAge = req.body.studentAge  
    const inputstudentUniqueId = req.body.studentUniqueId  

    students.push({  
         studentName: inputstudentName,  
         studentEmail: inputstudentEmail,  
         studentAge: inputstudentAge,  
         studentUniqueId: inputstudentUniqueId  

    })  

   res.render("home", {  
        data: students  
    })  
}) 

app.post('/delete', (req, res) => { 

    var requestedstudentUniqueId = req.body.studentUniqueId;  
    var j = 0;  
    students.forEach(student => {  
        j = j + 1;  
        if (student.studentUniqueId === requestedstudentUniqueId) {  
            students.splice((j - 1), 1)  
        }  
    })  
    res.render("home", {  
        data: students  
    })  
}) 

app.post('/update', (req, res) => { 
    const inputstudentName = req.body.studentName  
    const inputstudentEmail = req.body.studentEmail  
    const inputstudentAge = req.body.studentAge  
    const inputstudentUniqueId = req.body.studentUniqueId  

     var j = 0;  
   students.forEach(student => {  
       j = j + 1;  
        if (student.studentUniqueId === inputstudentUniqueId) {  
           student.studentName = inputstudentName  
            student.studentEmail = inputstudentEmail  
            student.studentAge = inputstudentAge  
        }  
    })  
   res.render("home", {  
        data: students  
    })  
 }) 
  app.listen(3000, (req, res) => { 
    console.log("App is running on port 3000")  
}) 