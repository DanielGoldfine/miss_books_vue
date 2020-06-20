import axios from 'axios'

export default {
    getBooksFromApi,
    transformGoogleBook
};


function getBooksFromApi(value) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?printType=books&q=${value}`)
        .then(res => {
            return Promise.resolve(res.data.items)
        })
}

async function transformGoogleBook(book) {

    console.log(book)

    let title = book.volumeInfo.title;
    let subtitle = book.searchInfo.textSnippet;
    let authors = book.volumeInfo.authors;
    let published = book.volumeInfo.publishedDate;
    let description = book.searchInfo.textSnippet;
    let pageCount = book.volumeInfo.pageCount;
    let categories = book.volumeInfo.categories;
    let thumbnail = book.volumeInfo.imageLinks.thumbnail;
    let language = book.volumeInfo.language;
    let amount = _makeInt(2);
    let currencyCode = (Math.random() > 0.5) ? 'ILS' : 'EUR';
    let isOnSale = (Math.random() > 0.5) ? true : false;

    let newBook = {
        title,
        subtitle,
        authors,
        published,
        description,
        pageCount,
        categories,
        thumbnail,
        language,
        listPrice: {
            amount,
            currencyCode,
            isOnSale
        }
    };
    return Promise.resolve(newBook);
}

function _makeInt(length) {
    var text = '';
    var possible = '0123456789';

    for(let i=0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    };
    return parseFloat(text);
};