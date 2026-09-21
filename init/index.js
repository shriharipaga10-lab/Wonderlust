const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const User = require("../models/user.js"); // adjust path to your User model

const MONGO_URL = "mongodb://127.0.0.1:27017/Wanderlust";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  // Find a real user to act as the owner of all seeded listings
  const user = await User.findOne({}); // grabs the first user in the collection

  if (!user) {
    console.log("No user found — create a user first (sign up on the site), then re-run this script.");
    return;
  }

  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: user._id, // real ObjectId, not a hardcoded string
  }));
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};

initDB();