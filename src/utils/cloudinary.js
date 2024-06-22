import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET, // Click 'View Credentials' below to copy your API secret
});

const uploadOnCloudinary = async (localFIlePath) => {
  try {
    if (!localFIlePath) return null;
    //upload on cloudinary
    const response = await cloudinary.uploader.upload(localFIlePath, {
      resource_type: "auto",
    });
    // file uploaded successfully;
    // console.log("file uploaded on cloudinay successfully", response.url);
    fs.unlinkSync(localFIlePath);
    return response;
  } catch (error) {
    fs.unlinkSync(localFIlePath); // romove locall file on any error
    return null;
  }
};

export { uploadOnCloudinary };
