import Router from "express";
import messages from "../data.js";

const postRouter = Router();

postRouter.get("/:postID", (req, res) => {
  const mess = getMessage(req.params.postID);
  res.render("post", { mess });
});

function getMessage(id) {
  for (const mess of messages) {
    if (mess.id.toString() === id)
      return mess;
  }
  return null;
}

export default postRouter;

