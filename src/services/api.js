const BASE_URL = 'https://6861ae9396f0cc4e34b7397c.mockapi.io/api/mq/books';

export const getFavoriteBooks = async () => {
    const response = await fetch(`${BASE_URL}`, {
    method: 'GET',
    headers: {'content-type':'application/json'},  });

    const data = await response.json();
    console.log({data})
    return data.results;

};


export const searchBooks = async (query) => {
    const response = await fetch(
        `${BASE_URL}/search/title?&query=${encodeURIComponent(query
    )}`
    );

    const data = await response.json();
    return data.results;
};

