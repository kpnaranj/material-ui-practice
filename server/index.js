//import front-end backend dependencies
import express from "express";
import next from "next";
//import external dependencies
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import mongoose from "mongoose";
//import routes
import carRoutes from "./routes/car.routes";
import faqRoutes from "./routes/faq.routes";
//set up server
const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();
const port = 3000;
const db = "mongodb://localhost:27017/car-trade-app";
//set up database
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`DB Connected on ${db}`));
//Build App
nextApp.prepare().then(() => {
  const app = express();
  //external middlewares
  app.use(morgan("dev"));
  app.use(bodyParser.json());
  app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );
  app.use(cookieParser());
  //routes
  app.use("/api", carRoutes);
  app.use("/api", faqRoutes);
  //Send everything
  app.get("*", (req, res) => {
    return handle(req, res);
  });
  //listen to the port
  app.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
