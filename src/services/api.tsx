import { useState, useEffect } from "react";
import BookCard from "../components/BookCard";

const API_KEY = ""


//const BASE_URL = new URL ("https://6861ae9396f0cc4e34b7397c.mockapi.io/api/mq/NewBookList1"); URL.searchParams.append('Title', {searchQuery})




/*}

export const getPopularBooks = async () => {
    const response = await fetch(`${BASE_URL} `);
    const data = await response.json();
    return data.results
};

export const searchBooks = async (searchQuery:any) => {
    const response = await fetch(BASE_URL, {
        method: 'GET',
        headers: {'content-type':'application/json'},
    }).then(res => {
        if (res.ok) {
            return res.json();
        }
        //handle error
    }).then(books => {
        //mockapi returns only tasks that match searchQuery
    }).catch(error => {
        //handle error
    })
       

};

}*/


 export default function ListBooks()  {

    const [books, setBooks] = useState([{
        Title:'', 
        Author: '',
        CoverImage: <img src=" " alt="" />,
        PublishDate:'',
        id: ''
        },
    ]) 

  async () => {


fetch('https://6861ae9396f0cc4e34b7397c.mockapi.io/api/mq/NewBookList1', {
  method: 'GET',
  headers: {'content-type':'application/json'},
}).then(res => {
  if (res.ok) {
      return res.json();
  }
}).then(books => {
    books;
    console.log(books);
   
}).catch(error => {
    console.log(error)
  // handle error
})
}  
return (
     <div className = "books-grid">
                   {books.map((books) => (
                    
                <div className="book-card" key={books.id}>
                    <div className="book-cover">
                        <img src={'books.CoverImage'} alt={books.Title} />
                        <div className = "book.overlay"> 
                        </div>
                        <BookCard books={books} key={books.Title} /> 
                        <div className = "book-info">
                            <h3> {books.Title}</h3>
                            <p>{books.PublishDate}</p>
                        </div>
                    </div>
                 </div>
                    
                      
                ))}
                 </div> 
)
 }
