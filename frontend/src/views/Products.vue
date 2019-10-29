<template>
  <div class="Products">
    <div class="ui top attached tabular menu">
      <div class="active item">Products</div>
    </div>
    <div class="ui attached segment">
      <div class="ui grid">
        <div class="four wide column">
          <div class="ui vertical fluid menu">
            <a
              class="item"
              @click="toggleMenu('purchase')"
              v-bind:class="{ active: menu.purchase }"
              >Record purchase</a
            >
            <a
              class="item"
              @click="toggleMenu('addproduct')"
              v-bind:class="{ active: menu.addproduct }"
              >Add products</a
            >
            <a
              class="item"
              @click="toggleMenu('addsupplier')"
              v-bind:class="{ active: menu.addsupplier }"
              >Add suppliers</a
            >
            <a
              class="item"
              @click="toggleMenu('manageproduct')"
              v-bind:class="{ active: menu.manageproduct }"
              >Manage products</a
            >
          </div>
        </div>
        <div class="twelve wide stretched column">
          <div class="ui segment">
            <ProductPurchase v-if="menu.purchase" />
            This segment auto
            <button @click="shout">Shout</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//components
import ProductPurchase from "@/components/products/purchase.vue";

export default {
  name: "products",
  components: {
    ProductPurchase
  },
  data() {
    return {
      menu: {
        purchase: true,
        addproduct: false,
        addsupplier: false
      }
    };
  },
  methods: {
    shout() {
      console.log(this.menu);
    },
    toggleMenu(selection) {
      for (let item in this.menu) {
        this.menu[item] = false;
      }
      this.menu[selection] = true;
    }
  }
};
</script>
