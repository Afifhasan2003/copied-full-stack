import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";

 setBooks
const Books = () => {

    const [books,setBooks] = useState([])       //books is 


    useEffect(()=>{
        const fetchAllBooks = async ()=>{
            try{
                const res = await axios.get("http://localhost:8800/books")
                setBooks(res.data);

            }catch(err){
                console.log(err)
            }
        }  
        
        fetchAllBooks()
    },[])

    const handleDelete = async (id) =>{
        try{
            await axios.delete("http://localhost:8800/books/" + id)
            setBooks(books.filter(book => book.id !== id))

        }
        catch(err){
            console.log(err)
        }
    }
    






  return (
    <div>
        <h1>List of Books</h1>
        <div className="books">
            {books.map(book=> (     //not curly braces, coz we are returning (...)
                <div className="book" key={book.id} >
                    {<img src={book.cover} alt="" />}
                    <h2>{book.title} </h2>
                    <p>{book.desc}</p>
                    <span>{book.price} </span>
                    <button className='delete' onClick = {()=> handleDelete(book.id)} >Delete</button>
                    <button className='update'>
                        <Link to= {`/update/${book.id}`} > Update</Link>
                    </button>
                </div>
           ) )}
        </div>
        <Link to="/add">
            <button>Add new book</button>
        </Link>
    </div>
  )
}

export default Books
