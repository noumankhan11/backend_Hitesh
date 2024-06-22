// require("dotenv").config({ path: "./env" });
import dotenv from "dotenv";
import connectDb from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});

connectDb()
  .then(() => {
    app.on("error", (err) => {
      console.log("ERR : ", err);
      throw err;
    });
    app.listen(process.env.PORT || 8000, () => {
      console.log("app is listening on port ", process.env.PORT);
    });
  })
  .catch((err) => console.log("Db connection failed Error: ", err));

/*
import express from "express";
const app = express();

(async () => {
  try {
    await mongoose.connect(`process.env.MONGODB_URI/${DB_NAME}`);
    app.on("error", (err) => {
      console.log("Error: ", err);
      throw err;
    });

    app.listen(process.env.PORT || 3000, () => {
      console.log("app is listening on port : ", process.env.PORT);
    });
  } catch (error) {
    console.error("error while connection to db: ", error);
  }
})();
*/
