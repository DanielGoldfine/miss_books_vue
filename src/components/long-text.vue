<template>
  <main class="long-text">
    <p v-if="isTextFit">{{text}}</p>
    <p v-else-if="!isLongText">
      {{shortText}}...
      <br />
      <span class="toggle-length" @click="toggleLength">show more</span>
    </p>
    <p v-else>
      {{text}}
      <br />
      <span class="toggle-length" @click="toggleLength">show less</span>
    </p>
  </main>
</template>

<script>
export default {
  name: "long-text",
  props: ["text", "length"],

  data() {
    return {
      isTextFit: false,
      isLongText: false
    };
  },
  created() {
    if (this.text.length < this.length) this.isTextFit = true;
  },
  methods: {
    toggleLength() {
      this.isLongText = !this.isLongText;
    }
  },
  computed: {
    shortText() {
      return this.text
        .split("")
        .splice(0, this.length)
        .join("");
    }
  }
};
</script>