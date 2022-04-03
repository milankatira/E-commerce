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


exports.loginUser = catchAsyncError(async (req, res, next) => {

  const { email, password } = req.body;
  if(!email || !password) {
    return next(new ErrorHandler("please provide email and password", 400));
  }
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return next(new ErrorHandler("email or password is incorrect", 400));
  }
  const isPasswordMatch = await user.comparePassword(password);
  if (!isPasswordMatch) {
    return next(new ErrorHandler("email or password is incorrect", 400));
  }
  const token = user.getJWTToken();
  res.status(200).json({
    success: true,
    token,
  });
})