<template>
  <main class="review-form">
    <form @submit.prevent="onSubmit">
      <div class="name-rating flex align-center justify-space-between">
        <input
          type="text"
          placeholder="Your Name"
          class="reader-name"
          v-model="review.reader"
          ref="nameInput"
        />
        <div class="rating flex align-center justify-space-between">
          <svg class="star-btn" @click="setRating(1)" viewBox="0 0 576 512">
            <path
              :class="{yellow : review.rating > 0}"
              d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 
                        103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5
                         105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
            />
          </svg>
          <svg class="star-btn" @click="setRating(2)" viewBox="0 0 576 512">
            <path
              :class="{yellow : review.rating > 1}"
              d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 
                        103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5
                         105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
            />
          </svg>
          <svg class="star-btn" @click="setRating(3)" viewBox="0 0 576 512">
            <path
              :class="{yellow : review.rating > 2}"
              d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 
                        103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5
                         105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
            />
          </svg>
          <svg class="star-btn" @click="setRating(4)" viewBox="0 0 576 512">
            <path
              :class="{yellow : review.rating > 3}"
              d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 
                        103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5
                         105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
            />
          </svg>
          <svg class="star-btn" @click="setRating(5)" viewBox="0 0 576 512">
            <path
              :class="{yellow : review.rating > 4}"
              d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 
                        103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5
                         105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
            />
          </svg>
        </div>
      </div>
      <div class="review-submit flex column">
        <textarea class="review" placeholder="Add your review" v-model="review.txt"></textarea>
        <button class="submit">Submit</button>
      </div>
    </form>
  </main>
</template>

<script>
export default {
  name: "review-form",
  data() {
    return {
      review: {
        reader: "Book Reader",
        txt: "",
        rating: 0
      }
    };
  },
//   created() {
//       console.log(this.$refs)
//     this.$refs.nameInput.focus()
//   },
  methods: {
    setRating(rating) {
      if (rating === this.review.rating) {
        this.review.rating = 0;
        return;
      }
      this.review.rating = rating;
    },
    onSubmit() {
      const newReview = { ...this.review };
      this.$emit("submitReview", newReview);
      this.review = {
        reader: "",
        txt: "",
        rating: 0
      };
    }
  }
};
</script>