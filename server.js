const express = require ('express')
var multer = require('multer')
var upload = multer({ dest: 'uploads/' })
const fs = require('fs-extra')

const app=express();
app.use(express.static("public"));

app.get("/",(req,res)=>{

})

app.post("/get-file-size", upload.single('file'), function (req, res) {


  
  if (req.file) {
    res.send({
      size: req.file.size
    })

    fs.emptyDir('./uploads', err => {
      if (err) return console.error(err)
    })
  }else{
    res.send("Please Select a file to check its size")
  }
})

app.listen(3000)