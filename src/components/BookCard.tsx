import "../css/BookCard.css"

function BookCard({books}: {books:any}) {

    function onFavoriteClick() {
        alert("Clicked")
    }

return (
<div className="book-card" >
    <div className="book-cover">
        <img src={books.url} alt={books.title} />
        <div className = "book.overlay">
            <button className="favorite.btn" onClick={onFavoriteClick} >
                ☆
            </button>
        </div>
    </div>
    <div className = "book-info">
        <h3> {books.title}</h3>
        <p>{books.publishDate}</p>
    </div>

</div>
)
}

export default BookCard;