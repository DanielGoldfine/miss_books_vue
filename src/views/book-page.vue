<template>
  <main>
    <add-book @addBook="addBook" />
    <bookFilter @setFilter="setFilter" />
    <bookList @selectBook="selectBook" @removeBook="removeBook" :books="booksToShow" />
  </main>
</template>

<script>
import bookService from "../services/book.service.js";

import bookList from "../components/book-list.vue";
import bookFilter from "../components/book-filter.vue";
import addBook from "../components/add-book.vue";

export default {
  name: "book-page",
  data() {
    return {
      books: [],
      filterBy: null
    };
  },
  async created() {
    this.books = await bookService.query();
  },
  methods: {
    removeBook(bookId) {
      bookService.remove(bookId);
    },
    selectBook(bookId) {
      this.$router.push(`/book/${bookId}`);
    },
    setFilter(filterBy) {
      this.filterBy = filterBy;
    },
    async addBook(newBook) {
      const savedBook = await bookService.save(newBook)
      this.books.unshift(newBook)
    }
  },
  computed: {
    booksToShow() {
      let filteredBooks = [...this.books];
      if (!this.filterBy) return filteredBooks;
      if (this.filterBy.title) {
        filteredBooks = filteredBooks.filter(book =>
          book.title.toLowerCase().includes(this.filterBy.title.toLowerCase())
        );
      }
      if (this.filterBy.minPrice) {
        filteredBooks = filteredBooks.filter(
          book => book.listPrice.amount > this.filterBy.minPrice
        );
      }
      if (this.filterBy.maxPrice) {
        filteredBooks = filteredBooks.filter(
          book => book.listPrice.amount < this.filterBy.maxPrice
        );
      }

      return filteredBooks;
    }
  },
  components: {
    bookList,
    bookFilter,
    addBook
  }
};
</script>
