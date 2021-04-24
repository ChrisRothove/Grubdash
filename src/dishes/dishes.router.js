const router = require("express").Router();
const controller = require("./dishes.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router
  .route("/:dishId")
  .get(controller.readIt)
  .put(controller.putIt)
  .all(methodNotAllowed);
router
  .route("/")
  .get(controller.list)
  .post(controller.postIt)
  .all(methodNotAllowed);

module.exports = router;
