'use strict';

import {DbService} from './db-service.js';

const KEY = 'VUE_MISSBOOKS';

export default {
    query,
    get,
    remove,
    save,
    getEmptyBook
}

async function query() {
    var books = await DbService.query(KEY);
    return books;
}

async function get(id) {
    const book = await DbService.get(KEY, id);
    return book;
}

function remove(id) {
    console.log('book service remove', id)
    return DbService.delete(KEY, id);
}

async function save(book) {
    if (book._id) return DbService.put(KEY, book);
    else return DbService.post(KEY, book)
}


function getEmptyBook() {
    return {
        vendor: '',
        speed: 0
    }
}