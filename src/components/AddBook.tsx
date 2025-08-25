import { useState, useEffect } from "react";
import { BASE_URL } from "../services/Api.tsx";


export default function AddBook() {
   
    const newBook = {
    pubDate: "1999",
    authName: 'He Hool',
    title: 'Test New',
    coverImg: 'http://test'
     
};

fetch(`${BASE_URL}`, {
    method: 'POST',
    headers: {'content-type':'application/json'},
    body: JSON.stringify(newBook)
}).then(res => {
    if (res.ok) {
        return res.json();
    }
}).then (res => {
    
}).catch(error => {
    console.log(error)
})


return (
    <div>
test
    </div>
)}