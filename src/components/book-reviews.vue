<template>
  <main class="book-reviews">
    <review-preview v-for="(review, idx) in reviews" :key="idx" :idx="idx" :review="review" @removeReview="removeReview"/>
  </main>
</template>

<script>
import reviewPreview from "./review-preview.vue";

export default {
  name: "book-reviews",
  props: ["reviews"],
  components: {
    reviewPreview
  },
  methods: {
      removeReview(idx) {
          this.$emit('removeReview', idx)
      }
  }
};
</script>