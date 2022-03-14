const express = require("express");
const app = express();
const port = 8800;

let users = require("./users.json");
app.use(express.json());

const req_api = (req,resp,next) =>{
    req.city = "mumbai";
    next();
}

app.get("/",req_api, (req, resp)=>{
    const obj ={
        "api_city_is":req.city,
        "users": users
    }
    resp.json(obj)

})
app.post("/users", (req, resp) => {
    //console.log(req.body);
    books.push(req.body)
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