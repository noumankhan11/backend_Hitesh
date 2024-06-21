import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {
  // get user data from frontend
  // validation - not empty
  // check if user already exist: username, email
  // check for images, check for avatar
  // upload them to cloudinary
  // create user object - create entry in db
  // romove password and refresh token field from respnse
  // check for user creation creation
  // return res || send response back to frontend

  const { username, fullName, email, password } = req.body;
  console.log(req.body);
});

export { registerUser };
