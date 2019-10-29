<template>
  <div class="ui container" id="app">
    <div class="ui raised segment">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/products">Products</router-link> |
      <router-link to="/Tools">Tools</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  text-align: center;
  margin-top: 8px;
}
</style>
