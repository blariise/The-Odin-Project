import express from "express";
import indexRouter from "./routes/indexRouter.js"
import newRouter from "./routes/newRouter.js";
import postRouter from "./routes/postRouter.js";

const app = express();

app.set("views", "./views");
app.set("view engine", "ejs");

app.use(express.static("./public"));
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);
app.use("/new", newRouter);
app.use("/post", postRouter);

app.listen(3000);

