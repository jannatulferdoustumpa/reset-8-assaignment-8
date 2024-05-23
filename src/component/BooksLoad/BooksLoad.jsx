
import { useEffect, useState } from "react";
import Book from "../Book/Book";


const BooksLoad = () => {
    const [books, setBooks] = useState([]);

    useEffect(()=>{
        fetch('book.json')
        .then(res =>res.json())
        .then(data => setBooks(data));
    },[])
    return (
        <div className=" w-10/12 mx-auto">
            <h1 className=" font-bold text-5xl text-center">Books : {books.length}</h1>
            <div className=" grid grid-cols-3 gap-3 mt-10 ">
               {
                books.map (book => <Book key={book.id} book ={book}></Book>)
               }
            </div>
        </div>
    );
};

export default BooksLoad;