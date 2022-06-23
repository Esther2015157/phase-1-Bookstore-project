let fetchBooks =async() => {
    let books = await fetch('https://www.googleapis.com/books/v1/volumes?q=esther&key=AIzaSyC7CUOS9l1sqbP6mbeDePBod9xUc1iysY8')
    let data =await  books.json()
    console.log(data.items[0].volumeInfo)
    let response=data.items
    response.map((bookdata) => {
       console.log(bookdata)
       
        const list = document.querySelector('.book-display .list ul')
        const li=document.createElement("li")
        li.textContent = bookdata.volumeInfo.title
        list.appendChild(li)
    })
    
}

fetchBooks()