<template>
  <main v-if="book" class="book-details-container main-container">
    <section class="book-details flex align-end">
      <div class="book-img">
        <img v-if="book.listPrice.isOnSale" class="sale" src="../assets/imgs/sale.png" alt />
        <img :src="book.thumbnail" alt />
      </div>
      <div class="right-side">
        <div class="book-desc">
          <h1>{{book.title}}</h1>
          <h3 class="price" v-bind:class="{cheap: isCheap, pricy: isPricy}">{{getPrice}}</h3>
          <h5>Published on : {{book.published}} {{getPublishTime}}</h5>
          <long-text :text="book.description" :length="100" />
        </div>
        <reviewForm @submitReview="submitReview" />
        <bookReviews
          v-if="book.reviews"
          :reviews="book.reviews"
          @removeReview="removeReview"
        />
      </div>
    </section>
  </main>
</template>


<script>
import bookService from "../services/book.service.js";

import longText from "../components/long-text.vue";
import reviewForm from "../components/review-form.vue";
import bookReviews from "../components/book-reviews.vue";

export default {
  name: "book-details",
  data() {
    return {
      book: null,
      isCheap: false,
      isPricy: false
    };
  },
  async created() {
    const id = this.$route.params.id;
    this.book = await bookService.get(id);
    if (this.book.listPrice.amount < 40) this.isCheap = true;
    if (this.book.listPrice.amount > 150) this.isPricy = true;
  },
  methods: {
      async submitReview(review) {
          const bookToSave = {...this.book};
          if (!bookToSave.reviews) bookToSave.reviews = [];
          bookToSave.reviews.push(review);
          const savedBook = await bookService.save(bookToSave);
          this.book = savedBook;
      },
     async removeReview(idx) {
          const bookToSave = {...this.book};
          bookToSave.reviews.splice(idx, 1);
          const savedBook = await bookService.save(bookToSave);
          this.book = savedBook;
      }
  },
  computed: {
    pageCount() {
      let readingTime;
      if (this.book.pageCount < 100) readingTime = "Light Reading";
      if (this.book.pageCount > 200 && this.book.pageCount < 500)
        readingTime = "Decent Reading";
      if (this.book.pageCount > 500) readingTime = "Long Reading";
      return readingTime;
    },
    getPrice() {
      let currencyCode;
      switch (this.book.listPrice.currencyCode) {
        case "EUR":
          currencyCode = "€";
          break;
        case "USD":
          currencyCode = "$";
          break;
        case "ILS":
          currencyCode = "₪";
          break;
        default:
          break;
      }
      return currencyCode + this.book.listPrice.amount;
    },
    getPublishTime() {
      const date = new Date();
      const year = date.getFullYear();
      if (year - this.book.published < 1) return "New!";
      if (year - this.book.published > 10) return "Veteran Book";
    }
  },
  components: {
    longText,
    reviewForm,
    bookReviews
  }
};
</script>