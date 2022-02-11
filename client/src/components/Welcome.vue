<template>
  <header>
    <img
        alt="logo"
        class="logo"
        src="../assets/cards_icon.png"
        width="125"
        height="125"
    />
    <div class="greetings">
      <h1 class="green">Welcome to Dynaway's Planning poker!</h1>
      <h3>Let's estimate!</h3>
    </div>
  </header>

</template>

<style scoped>
.logo {
  display: block;
  margin: 0 auto 2rem;
}
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: left;
}
</style>

<script setup lang="ts">
</script>


