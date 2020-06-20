<template>
  <main class="review-preview flex column align-end justify-space-between">
    <div>
      <h5>{{review.reader}}</h5>
      <p>{{review.txt}}</p>
    </div>
    <div class="flex align-center justify-space-between">
      <div class="rating flex align-center justify-space-between">
        <svg class="rating-star" viewBox="0 0 576 512">
          <path
            :class="{yellow : review.rating > 0}"
            d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 
                        103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5
                         105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
          />
        </svg>
        <svg class="rating-star" viewBox="0 0 576 512">
          <path
            :class="{yellow : review.rating > 1}"
            d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 
                        103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5
                         105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
          />
        </svg>
        <svg class="rating-star" viewBox="0 0 576 512">
          <path
            :class="{yellow : review.rating > 2}"
            d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 
                        103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5
                         105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
          />
        </svg>
        <svg class="rating-star" viewBox="0 0 576 512">
          <path
            :class="{yellow : review.rating > 3}"
            d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 
                        103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5
                         105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
          />
        </svg>
        <svg class="rating-star" viewBox="0 0 576 512">
          <path
            :class="{yellow : review.rating > 4}"
            d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 
                        103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5
                         105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
          />
        </svg>
      </div>
      <button @click="onRemoveReview" class="delete-btn">Delete</button>
    </div>
  </main>
</template>

<script>
export default {
  name: "review-preview",
  props: ["review", "idx"],
  created() {
  },
  methods: {
      onRemoveReview() {
          this.$emit('removeReview', this.idx)
      }
  }
};
</script>