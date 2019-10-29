<template>
  <div class="tools">
    <h1>This is an TOOLS page</h1>
    <textarea v-model="query" name="SQL" id="" cols="30" rows="10"></textarea>
    <button v-on:click="post()">Query</button>
    <textarea v-model="results" name="SQL" id="" cols="30" rows="10"></textarea>
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
