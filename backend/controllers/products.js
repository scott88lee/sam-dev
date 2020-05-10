const products = require("../models/products");

module.exports = {
  getAllProducts: async (req, res) => {
    try {
      let result = await products.getAll();
      if (result.length > 0) {
        console.log("Query success, rendering results");
        res.render("partials/productList", {
          layout: "invLayout",
          payload: result,
        });
      } else {
        res.render("partials/productList");
      }
    } catch (err) {
      console.log(err);
      res.render("main");
    }
  },

};