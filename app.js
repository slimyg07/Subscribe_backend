import express from "express";
const app = express();


app.get("/", (req,res) => {
   
    res.send("<h1>Harshvardhan</h1>");
});


app.listen(3000,"0.0.0.0", ()=>{
    console.log("App listeing at 3000 port");

}
)