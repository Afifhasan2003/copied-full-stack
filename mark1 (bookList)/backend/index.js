import express from "express";
import mysql from "mysql";
import cors from "cors";



const app = express();


const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"ibab6020@#&",
    database:"test"
})


app.use(express.json())   //it allows to send json data in post request
app.use(cors())             // cors is used to allow cross-origin requests( meaning that the frontend and backend can be on different ports or domains) 

app.get("/",(req,res)=>{
    res.json("helloo this is backend")
})
app.get("/books",(req,res)=>{
    const q = "SELECT * FROM books";
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
    
    
})

app.post("/books",(req,res)=>{
    const q = "insert into books(`title`,`desc`, `price`,`cover` ) value(?)"
    const values= [
        req.body.title,
        req.body.desc,
        req.body.price,
        req.body.cover
    ]

    db.query(q,[values],(err,data)=>{
        if(err) return res.json(err)
        return res.json('book has been created')
    })
})

app.delete("/books/:id",(req,res)=>{
    const bookId = req.params.id
    const q = "DELETE FROM books WHERE id = ?"

    db.query(q, [bookId],(err,data)=>{
        if(err) return res.json(err);
        return res.json("Book has been deleted successfully!")
    })
    
})
app.put("/books/:id",(req,res)=>{
    const bookId = req.params.id
    const q = "UPDATE books SET `title` = ?,`desc`=? , `price`=?, `cover`=? WHERE id=?"

    const values=[
        req.body.title,
        req.body.desc,
        req.body.price,
        req.body.cover
    ]

    db.query(q, [...values, bookId],(err,data)=>{
        if(err) return res.json(err);
        return res.json("Book has been updated successfully!")
    })
    
})









app.listen(8800,()=>{
    console.log("connected to backend")
})