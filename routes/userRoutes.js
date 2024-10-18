const { findAll, create, findOne, updateOne, deleteOne } = require("../controllers/userController");

const router = require("express").Router();

router.route("/").get(findAll).post(create);
router.route("/:id").get(findOne).patch(updateOne).delete(deleteOne);

module.exports = router;
