import Router from "express";
import messages from "../data.js";

const newRouter = Router();

newRouter.get("/", (req, res) => {
  res.render("form");
});

newRouter.post("/", (req, res) => {
  messages.push({
    id: crypto.randomUUID(),
    ...req.body,
    added: new Date()
  });
  console.log(messages);
  res.redirect("/");
});

export default newRouter;

