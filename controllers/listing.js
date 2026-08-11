const Listing = require("../models/listing.js");

module.exports.index = async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
};

module.exports.renderNewForm = async (req, res) => {
  res.render("listings/new.ejs");
};

module.exports.createListing = async (req, res) => {
  let url = req.file.secure_url;
  let filename = req.file.public_id;

  const newListing = new Listing(req.body.listing);
  newListing.owner = req.user._id;
  newListing.image = { url, filename };
  await newListing.save();
  req.flash("success", "New listing created");
  res.redirect("/listings");
};

module.exports.renderEditForm = async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "The listing you requested for does not exist");
    return res.redirect("/listings");
  }
  let originalImageurl = "";
  if (listing.image && listing.image.url) {
    originalImageurl = listing.image.url.replace(
      "/upload",
      "/upload/w_200,h_200",
    );
  }
  res.render("listings/edit.ejs", { listing, originalImageurl });
};

module.exports.updateListing = async (req, res) => {
  const { id } = req.params;
  let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });

  if (typeof req.file !== 'undefined') {
    let url = req.file.secure_url;
    let filename = req.file.public_id;
    listing.image = { url, filename };
    await listing.save();
  }

  req.flash("success", "Listing Updated");
  res.redirect("/listings");
};

module.exports.deleteListing = async (req, res) => {
  const { id } = req.params;
  let deletedList = await Listing.findByIdAndDelete(id);
  req.flash("success", "Listing Deleted");
  console.log(deletedList);
  res.redirect("/listings");
};

module.exports.showListing = async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id)
    .populate({
      path: "reviews",
      populate: {
        path: "author",
      },
    })
    .populate("owner");

  if (!listing) {
    req.flash("error", "The listing you requested for does not exist");
    return res.redirect("/listings");
  }
  res.render("listings/show.ejs", { listing });
};
