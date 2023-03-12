import express from "express";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./docAPI";
import homeController from "../controllers/homeController";
import checkportController from "../controllers/API/checkPort";

let router = express.Router();

let webRoutes = (app) => {
  // API Docs
  var options = {
    // customCss: `.swagger-ui .topbar { content:url("http://203.205.33.59:3000/img/logo.png"); height: 60px }`,
    customSiteTitle: "API - NTL",
    customfavIcon: "/assets/favicon.ico",
  };
  router.use("/api", swaggerUi.serve);
  router.get("/api", swaggerUi.setup(swaggerDocument, options));

  // Home
  router.get("/", homeController.getHomePage);

  // API check port open or close
  router.get("/api/checkport", checkportController.checkPort);

  return app.use("/", router);
};
module.exports = webRoutes;
