import { asyncHandler } from "../utils/asynchandler.js";

const registerUser = asyncHandler(async (req, res, next) => {
  const { email, password, name } = req.body;
   res.status(201).json({
    success: true,
    message: "User registered successfully"});
    
});