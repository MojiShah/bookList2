import React, { useEffect, useState } from "react";
import '../../styles/bootstrap.min.css';
import Book from "./Book";

function AddForm() {
    //variables and states
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [year, setYear] = useState('');
    const [books,setBooks]=useState([]);

    //functions
    useEffect(()=>{console.log(books);},[books])
    const submitHandler = (e) => {
        e.preventDefault();
        let NewBook
        if (title && author && year){
            NewBook = {
               id: books.length + 1,
               title,
               author,
               year
           }
           setBooks([...books,NewBook]);
           setTitle('');
           setAuthor('');
           setYear('');
        } 
    }

    //JSX
    return (
        <>
            <form id="book-form" autoComplete="off" onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" className="form-control"
                        value={title} 
                        onChange={e => setTitle(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="author">Author</label>
                    <input type="text" id="author" className="form-control"
                        value={author} 
                        onChange={e => setAuthor(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="year">Year</label>
                    <input type="text" id="year" className="form-control"
                        value={year} 
                        onChange={e => setYear(e.target.value)}
                    />
                </div>
                <input type="submit" value="Add Book" className="btn  btn-block btn-warning add-btn mt-4 mb-3" style={{ width: '100%', height: 40, fontSize: 18, fontWeight: 'bold' }} />
            </form>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Year</th>
                    </tr>
                </thead>
                <tbody id="bookList">
                    {books.map(x => <Book key={x.id} {...x}/>)}
                </tbody>
            </table>
        </>
    )
}

export default AddForm;