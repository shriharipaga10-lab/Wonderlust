const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { listingSchema } = require("../schema.js");
const Listing = require("../models/listing.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const reviewRouter = require("./review.js");
const { isReviewOwner } = require("../middleware.js");
const listingController = require("../controllers/listing.js");
const multer  = require('multer')
const { storage } = require("../cloudConfig.js");
const upload = multer({storage});

router
  .route("/")
  .get(wrapAsync(listingController.index))
  .post(
    isLoggedIn,
    upload.single('listing[image]'),
    validateListing,
    wrapAsync(listingController.createListing),
  );


  //new route
router.get("/new", isLoggedIn, wrapAsync(listingController.renderNewForm));


router
  .route("/:id")
  .put(
    isLoggedIn,
    isOwner,
    validateListing,
    upload.single('listing[image]'),
    wrapAsync(listingController.updateListing),
  )
  .delete(
    isLoggedIn,
    isOwner,
    wrapAsync(listingController.deleteListing)
   )
  .get(wrapAsync(listingController.showListing));

//Index route


//create route

//edit route
router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(listingController.renderEditForm),
);

//edit route

//delete route

//show route

module.exports = router;
