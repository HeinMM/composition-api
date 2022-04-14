<template>
  <header>
      <h1>Bloggy Vue</h1>
      <nav>
          <router-link :to="{name:'home'}">Home</router-link>
          <router-link :to="{name:'create'}">create</router-link>
      </nav>
  </header>
</template>

<script>
export default {

}
</script>

<style scoped>
    header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
  }
  header h1 {
    color: #dfdfdf;
    font-size: 48px;
  }
   a {
    color: #bbb;
    text-decoration: none;
    margin-left: 20px;
  }
   a.router-link-active {
    color: #444;
    font-weight: bold;
  }
</style>