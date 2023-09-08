const express = require("express");
const dotenv = require("dotenv")
const app = express();
dotenv.config();

app.use(express.json());

app.post("/bfhl",(req,res)=>{
    const {data} = req.body;
    let n = data.length;
    let alphabets = [];
    let num = [];
    for(let i = 0; i < n; i++){
        if(isNaN(data[i])){
            alphabets.push(data[i]);
        }else{
            num.push(data[i]);
        }
    }
    alphabets.sort();
    res.json({
        "is_success": true,
        "user_id" : "chandra_vadhana_karthik_02092002", 
        "email" : "vadhanakarthik_pandi@srmap.edu.in",
        "roll_number" : "AP20110010135",
        "numbers" : num,
        "alphabets" : alphabets,
        "highest_alphabet": alphabets[alphabets.length - 1],
    })
    
})
app.get("/bfhl",(req,res)=>{
    res.status(200).json({
        "operation_code" : 1,
    })
})

PORT = process.env.PORT || 5002;
app.listen(PORT, console.log(`Server running on PORT ${PORT}...`));
module.exports = app
