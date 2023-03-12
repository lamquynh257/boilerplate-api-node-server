require("dotenv").config();
import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import route from "./route/route";
import connecDB from "./config/connectDB";
import cors from "cors";

let app = express();
app.use(express.static("public"));
app.use(cors({ origin: true }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
route(app);

// connecDB(); // Sử dụng khi muốn kết nối DB Mysql

let port = process.env.PORT || 2503;

app.listen(port, () => {
  console.log("Srv opened on port " + port);
});
