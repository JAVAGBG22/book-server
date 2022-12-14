const User = require("../model/user");

// create a new user
// POST /api/user/register
exports.create = async (req, res) => {
  try {
    const user = await new User({
      ...req.body,
    }).save();
    res.json(user);
  } catch (err) {
    console.log(err);
    return res.status(400).send("User creation failed");
  }
};

exports.getAll = async (req, res) => {
  const allUsers = await User.find({}).exec();
  res.json(allUsers);
};
