<template>
  <main class="nav-container main-container">
    <nav class="nav-bar flex justify-space-between align-center">
      <router-link class="main-logo" to="/book">
        <h1>MissBooks</h1>
      </router-link>
      <div class="nav-links">
        <router-link to="/">Home</router-link>
        <a class="links-seperator">|</a>
        <router-link to="/book">Books</router-link>
        <a class="links-seperator">|</a>
        <router-link to="/about">About</router-link>
      </div>
    </nav>
  </main>
</template>