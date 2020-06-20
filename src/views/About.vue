<template>
  <div class="about flex column align-center justify-space-between">
    <h1>It's <span>{{time}}</span> and it's time to READ!</h1>
    <img src="../assets/imgs/about-img.png" alt="">
  </div>
</template>

<script>
export default {
  name: "about-page",
  data() {
    return {
      timeInterval: null,
      time: new Date().toString().split(' ')[4]
    }
  },
  created() {
    this.timeInterval = setInterval(()=>{
      this.time = new Date().toString().split(' ')[4]
    }, 1000)
  },
  destroyed() {
    clearInterval(this.timeInterval)
  }
};
</script>
