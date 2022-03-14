const express = require("express");
const app = express();
const port = 8800;

let users = require("./users.json");
const cors = require('cors');
app.use(cors());
app.use(express.json());



app.get("/users", (req, resp)=>{
    resp.json(users)

})
app.post("/users", (req, resp) => {
    //console.log(req.body);
    users.push(req.body)
    resp.json(users)
})
app.delete("/users/:id", (req, resp)=> {
    const {id} = req.params
    users = users.filter((user) => user.id !== parseInt(id));
    resp.json(users)
})

app.listen(port,()=>{
    console.log("success")
})