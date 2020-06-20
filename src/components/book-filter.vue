<template>
  <main class="book-filter">
    <form class="flex align-center justify-center">
      <input class="book-title" v-model="filterBy.title" type="text" @input="onChangeFilter" placeholder="Filter by title" />
      <div class="price-inputs flex column align-center justify-space-between">
      <input type="number" v-model.number="filterBy.minPrice" @input="onChangeFilter" placeholder="From Price">
      <input type="number" v-model.number="filterBy.maxPrice" @input="onChangeFilter" placeholder="To Price">
      </div>
    </form>
  </main>
</template>

<script>
export default {
    name: 'book-filter',
  data() {
    return {
      filterBy: {
        title: '',
        minPrice: '',
        maxPrice: ''
      }
    }
  },
  methods: {
      onChangeFilter() {
          this.$emit('setFilter', this.filterBy)
      }
  },
  // computed: {
  //   minPricetoStr() {
  //     if (this.filterBy.minPrice === 0) {
  //       return ''; 
  //     } else {
  //       return this.filterBy.minPrice;
  //     }
  //   },
  //   maxPricetoStr() {
  //     if (this.filterBy.maxPrice === 0) {
  //       return ''; 
  //     } else {
  //       return this.filterBy.maxPrice;
  //     }
  //   }
  // }
};
</script>