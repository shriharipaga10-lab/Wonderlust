const cloudinary = require("cloudinary");
const  CloudinaryStorage  = require("multer-storage-cloudinary");

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,  //these names are set on basis of cloudinary config
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
})

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "wanderlust_Dev", //folder name on cloudinary
        allowedFormats: ["jpeg", "png", "jpg"]
    }
})

module.exports = {
    cloudinary,
    storage
};