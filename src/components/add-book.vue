<template>
  <main class="add-book flex column align-center">
    <input type="text" v-model="searchVal" placeholder="Add Book" @input="handleChange" />
    <section v-if="foundBooks.length" class="found-books">
        <div v-for="(foundBook, idx) in foundBooks" :key="idx" @click="onAddBook(foundBook)" class="found-item">
            <p>{{foundBook.volumeInfo.title}}</p>
        </div>
    </section>
  </main>
</template>

<script>
import googleService from "../services/google.service.js";

export default {
  name: "add-book",
  data() {
    return {
      searchVal: "",
      foundBooks: []
    };
  },
  methods: {
    async handleChange() {
        if (this.searchVal === '') {
            this.foundBooks = [];
            return
        }
      const foundBooks =  await googleService.getBooksFromApi(this.searchVal)
      this.foundBooks = foundBooks;
    },
    async onAddBook(book) {
        const newBook = await googleService.transformGoogleBook(book)
        this.$emit('addBook', newBook)
        this.searchVal = ''
        this.foundBooks = []
    }
  }
};
</script>