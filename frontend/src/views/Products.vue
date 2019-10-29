<template>
  <div class="Products">
    <div class="ui top attached tabular menu">
      <div class="active item">Products</div>
    </div>
    <div class="ui attached segment">
      <div class="ui grid">
        <div class="four wide column">
          <div class="ui vertical fluid menu">
            <a class="item active">Record purchase</a>
            <a class="item">Add products</a>
            <a class="item">Add suppliers</a>
            <a class="item">Manage catergories</a>
          </div>
          <div class="ui vertical fluid menu">
            <a class="item active">Record murders</a>
            <a class="item">Add products</a>
            <a class="item">Add suppliers</a>
            <a class="item">Manage catergories</a>
          </div>
        </div>
        <div class="twelve wide stretched column">
          <div class="ui segment">This segment auto</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "tools",
  data() {
    return {
      query: "Enter here",
      results: "Results"
    };
  },
  methods: {
    shout(word) {
      console.log(word);
    },
    async post() {
      let payload = {
        mode: "sql",
        queryString: this.query
      };
      try {
        const response = await axios.post(
          "http://localhost:3000/wildcard",
          payload
        );
        console.log(response);
        this.results = JSON.stringify(response.data);
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>
