import BookCard from "../components/BookCard"
import { useState, useEffect } from "react";
import {  listBooks } from "../services/api"  ;
import "../css/Home.css"

function Home() {
    const [searchQuery, setSearchQuery] = useState('');
    const [error, setError] = useState('');
    const [loading, setloading] = useState(true);
    const [books, setBooks] = useState([{
        Title:'', 
        Author: '',
        CoverImage: <img src=" " alt="" />,
        PublishDate:'',
        id: ''
        },
    ])
       
       {/*} useEffect(()  => {
            const loadPopularBooks = async () => {
                try {
                    const popularBooks = await getPopularBooks()
                    setBooks(popularBooks)
                } catch (err) {
                    console.log(err)
                    setError("Failed to load books...")
            } finally {
                setloading(false);
            }
        };

        loadPopularBooks();
    },[]);

            const handleSearch = async (e) => {
                e.preventDefault()
                if (!searchQuery.trim()) return
                if (loading) return

                setloading(true)
                try {
                    const searchResults = await searchBooks(searchQuery)
                    setBooks(searchResults)
                    setError('')
                } catch (err) {
                    console.log(err)
                    setError("Failed to search books")
                } finally {
                    setloading(false)
                }
            };
           
 return(
        
        <div className ='home'>
            <form onSubmit={handleSearch} className="search-form">
                <input 
                type="text" 
                placeholder="Search for Books..." 
                className = 'search-input'
                value = {searchQuery}
                onChange = {(e) => setSearchQuery(e.target.value)}
                />
                <button type='submit' className="search-button" >
                    Search
                </button>
            </form>

                {error && <div className="error-message">{error}</div>}

            {loading ? (
                <div className="loading">Loading...</div>
            ) : (
                <div className = "books-grid">
                   {books.map((book) => (
                      <BookCard book={book} key={book.Title} /> 
                ))}. 
                 </div> 
            )}*/}
       return (   
           
             listBooks(),
        
                <div className = "books-grid">
                   {books.map((books) => (
                      <BookCard books={books} key={books.Title} /> 
                ))}
                 </div> 

    )}


export default  Home;