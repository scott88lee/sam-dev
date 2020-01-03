<template>
  <div>
    Product list: <button @click="load">Load</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      something: true,
      loaded: false,
      list : {}
    };
  },
  beforeCreate() {
    console.log('Before create: ' + this.something)
  },
  mounted() {
    if (this.something == true) {
      console.log('Mounted: ' + this.something)
    }
  },
  destroyed() {
    console.log("Goodbye");
  },
  methods:{
    load: function() {
      console.log("load clicked")
    }
  }
}
</script>