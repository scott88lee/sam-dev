<template>
  <div>
    Product list:
    <button @click="load">Refresh</button>
    
    if loaded, show table
    <table v-if="loaded" class="ui striped table">
  <thead>
    <tr>
      <th>ID</th>
      <th>SKU</th>
      <th>Brand</th>
      <th>Model</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(product, _index) in list" :key="_index">
          <td>{{product.product_id}}</td>
          <td>{{product.sku}}</td>
          <td>{{product.brand}}</td>
          <td>{{product.model}}</td>
          <td>{{product.price}}</td>
    </tr>
  </tbody>
</table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      something: true,
      loaded: false,
      list: []
    };
  },
  beforeCreate() {
    console.log("Before create: " + this.something);
  },
  async mounted() {
    this.list = await this.dLoad();
    if (this.list.length > 0) {
      this.loaded = true
    }
  },
  destroyed() {
    console.log("Goodbye");
  },
  methods: {
    load() {
      console.log(this.list);
    },
    dLoad() {
      return new Promise(function(resolve, reject) {
        axios
          .get("http://localhost:3000/products")
          .then(res => {
            if (res.status == 200) {
              resolve(res.data);
            }
          })
          .catch(error => {
            console.log(error);
            reject(error);
          });
      });
    }
  }
};
</script>
