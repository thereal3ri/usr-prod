const User = require("../models/user");

const findAll = async function (req, res, next) {
  try {
    const users = await User.findAll();

    res.status(200).json({
      status: "success",
      count: users.length,
      data: users,
    });
  } catch (error) {
    return next(error);
  }
};
const create = async function (req, res, next) {
  try {
    const { name, age } = req.body;
    const user = await User.create({ name, age });
    res.status(201).json({
      status: "success",
      data: user,
    });
  } catch (error) {
    return next(error);
  }
};

const findOne = async function (req, res, next) {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!user) {
      return next(new Error("User not found!"));
    }
    res.status(200).json({
      status: "success",
      data: user,
    });
  } catch (error) {
    return next(error);
  }
};

const updateOne = async function (req, res, next) {
  try {
    const { id } = req.params;
    const { name, age } = req.body;
    console.log(name, age);
    const [updateCount, updatedUsers] = await User.update({ name, age }, { where: { id }, returning: true });
    if (updateCount == 0) throw "User not updated!";
    res.status(200).json({
      status: "success",
      data: updatedUsers[0].toJSON(),
    });
  } catch (error) {
    return next(error);
  }
};

const deleteOne = async function (req, res, next) {
  try {
    const { id } = req.params;
    const deleteCount = await User.destroy({ where: { id } });
    if (deleteCount == 0) return next(new Error("User could not be deleted!"));
    res.status(204).json({
      status: "success",
      message: "User deleted!",
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  findAll,
  findOne,
  create,
  updateOne,
  deleteOne,
};
