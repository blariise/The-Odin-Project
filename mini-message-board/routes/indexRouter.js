import Router from "express";
import messages from "../data.js";

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  res.render("index", { messages });
});

export default indexRouter;

