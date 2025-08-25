import BookCard from "../components/BookCard"
import { useState, useEffect } from "react";
import { BASE_URL, getFavoriteBooks, searchBooks } from "../services/Api.tsx";
import AddBook from "../components/AddBook.tsx";
import 'bootstrap/dist/css/bootstrap.min.css';
//import "../css/Home.css"

 

function Home() {
    const [searchQuery, setSearchQuery] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true); 
    const [books , setBooks] = useState([]) 

    useEffect(()=> {

    const getAllBooks = async () => {
        try {
        const response = await fetch(`${BASE_URL}`, {
        method: 'GET',
        headers: {'content-type':'application/json'},  });

        const data = await response.json();
        console.log({data})
       
        setBooks(data);
        setIsLoading(false);
        } catch (error) {
            console.error('Error Fetching Data', error);
            setIsLoading(false);}
        console.log({books});

        };
        getAllBooks();
    }, []);
            
    if (isLoading) {
        return <div>Loading Data...</div>;
    }


    const searchBooks = async (searchQuery) => {
        const response = await fetch(
            `${BASE_URL}.searchParams.append('searchQuery'`,{
                method: 'GET',
                headers: {'content-type':'application/json'},
            }).then(res=> {
                if (res.ok) {
                    return res.json();
                }
            }) .then(books => {
            }).catch(error => {
            })
            }
            ;
            
        
        

       
    



        const handleSearch = async (e) => {
            e.preventDefault()
            if (!searchQuery.trim()) return
            if (isLoading) return

            setIsLoading(true)
            try {
                const searchResults = await searchBooks(searchQuery)
                setBooks(searchResults)
                setError('')
            } catch (err) {
                console.log(err)
                setError("Failed to search books")
            } finally {
                setIsLoading(false)
            }
                
        };
           
 return(
    <div> 
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

            {isLoading ? (
                <div className="loading">Loading...</div>
            ) : ( <div>
                    

              
                <div className = "books-grid">
                   {books.map((book) => (
                      <BookCard books={book} key={book.id} /> 
                ))}. 
                 </div>  
    </div>
            )}
</div> 
       




{/*   <div>
   <div>
        <h1>API Data:</h1>
        <ul>
            {books.map((item, index)=> (
                <li key={index}> {item.title || JSON.stringify(item)}</li>
            ))}
        </ul>
    </div>
    <div className = "books-grid">
                   {books.map((book) => (
                      <BookCard books={book} key={books.id} /> 
                ))}. 
                 </div>  
                 </div>;
*/}

</div>   )
}
export default  Home;