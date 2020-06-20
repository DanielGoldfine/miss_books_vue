<template>
  <main class="main-container">
    <section class="book-list card-grid-container">
      <div class="book-preview flex column align-center" v-for="book in books" :key="book._id">
        <div class="book-img-wrapper">
          <img :src="book.thumbnail" alt />
        </div>
        <h4>{{book.title}}</h4>
        <p>{{shortDesc(book.description)}}</p>
        <h5>{{getPrice(book.listPrice)}}</h5>
        <!-- <h3 v-if="book.listPrice.isOnSale">SALE</h3> -->
        <div class="btns-container flex column align-center justify-space-between">
          <!-- <button @click="onRemoveBook(book._id)">Remove</button> -->
          <button @click="onSelectBook(book._id)">Details</button>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "book-list",
  props: ["books"],
  components: {},
  methods: {
    onRemoveBook(bookId) {
      this.$emit("removeBook", bookId);
    },
    onSelectBook(bookId) {
      this.$emit("selectBook", bookId);
    },
    shortDesc(bookDesc) {
      if (bookDesc.length > 50) {
        let shortDesc = bookDesc
          .split("")
          .slice(0, 50)
          .join("");
        return `${shortDesc}...`;
      } else {
        return bookDesc;
      }
    },
    getPrice(listPrice) {
      let currencyCode;
      switch (listPrice.currencyCode) {
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
      return currencyCode + listPrice.amount;
    }
  }
};
</script>