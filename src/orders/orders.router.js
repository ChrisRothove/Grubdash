const router = require("express").Router();
const controller = require("./orders.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router
  .route("/:orderId")
  .get(controller.readIt)
  .put(controller.putIt)
  .delete(controller.deleteIt)
  .all(methodNotAllowed);
router
  .route("/")
  .get(controller.list)
  .post(controller.postIt)
  .all(methodNotAllowed);

module.exports = router;
