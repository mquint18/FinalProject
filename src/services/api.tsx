

const API_KEY = ""


//const BASE_URL = new URL ("https://6861ae9396f0cc4e34b7397c.mockapi.io/api/mq/NewBookList1"); URL.searchParams.append('Title', {searchQuery})




{/*}

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
*/}

export const listBooks = async () => {


fetch('https://6861ae9396f0cc4e34b7397c.mockapi.io/api/mq/NewBookList1', {
  method: 'GET',
  headers: {'content-type':'application/json'},
}).then(res => {
  if (res.ok) {
      return res.json();
  }
  // handle error
}).then(books => {
    
    console.log(books)
    return books;
  // Do something with the list of tasks
}).catch(error => {
    console.log(error)
  // handle error
})
    

}