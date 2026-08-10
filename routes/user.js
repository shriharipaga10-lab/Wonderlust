const express = require('express');
const router = express.Router();
const User = require("../models/user.js");
const passport = require("passport");
const wrapAsync = require('../utils/wrapAsync.js');
const ExpressError = require('../utils/ExpressError.js');
const { isLoggedIn } = require('../middleware.js');
const {saveRedirectUrl} = require("../middleware.js");
const userController = require('../controllers/user.js');


router.route("/signup")
  .get((userController.renderRegister))
  .post((userController.registerUser));

router.route("/login")
  .get((userController.renderLogin))
  .post(saveRedirectUrl, passport.authenticate("local", {
    failureFlash: true,
    failureRedirect: "/login"
  }), (userController.loginUser));

//logout route
router.get("/logout", isLoggedIn, (userController.logoutUser));

module.exports = router;