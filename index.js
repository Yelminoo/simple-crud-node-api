const express = require("express");
const { default: mongoose } = require("mongoose");
const Product = require("./models/product.model");
const productRoute = require("./routes/product.route.js");
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//route
app.use("/api/products", productRoute);
app.get("/", (req, res) => {
  res.send("Hello from node API");
});

mongoose
  .connect(
    "mongodb+srv://yelminoo:Aery425ty@cluster0.wucmmfh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("connect to db");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => console.log("not connect"));
