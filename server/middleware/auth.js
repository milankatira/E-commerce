const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncError = require("./catchAsyncError");

exports.isAuthenticUser = catchAsyncError(async (req, res, next) => {
  const {token} = req.cookies;

  console.log(token);

  if(!token){
    return next(new ErrorHandler("Please login to access this resource",401))
  }

  const decodedData=jwt.verify(token,process.env.JWT_SECRET);

  req.user=await userModel.findById(decodedData.id);

  next();
});
