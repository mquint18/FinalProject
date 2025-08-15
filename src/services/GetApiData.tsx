import { useState, useEffect} from 'react'


export default function GetApiData() {

 
        const [data, setData] = useState(null);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);
        
    useEffect(() => {
        fetch('https://6861ae9396f0cc4e34b7397c.mockapi.io/api/mq/books', {
        method: 'GET',
        headers: {'content-type':'application/json'},
        })
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
          .then(jsonData => {
            setData(jsonData);
            setLoading(false);
          })
          .catch(error => {
            setError(error);
            setLoading(false);
          });
        
    }, []);

  console.log(data);
    
    



  return (
        data
        );
  
  }

