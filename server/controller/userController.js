const User = require("../models/userModel");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncError = require("../middleware/catchAsyncError");

exports.registerUser = catchAsyncError(async (req, res, next) => {
  const { name, email, password, role } = req.body;
  const user = await User.create({
    name,
    email,
    password,
    avatar: { public_id: "hbhb", url: "hbbhbh" },
  });
  const token = user.getJWTToken();
  res.status(201).json({
    success: true,
    token,
  });
});
