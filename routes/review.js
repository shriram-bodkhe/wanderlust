const express = require("express");
const router = express.Router({mergeParams:true});
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { listingSchema,reviewSchema } = require("../schema.js");
const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
const {validateReview,isLoggedIn, isreviewAuthor} = require("../middleware.js");
const { createReview } = require("../controllers/reviews.js");
const reviewController = require("../controllers/reviews.js");

//Reviews
//post review route
router.post("/",isLoggedIn,validateReview, wrapAsync(reviewController.createReview));


//Delete reviews route 
router.delete("/:reviewId",isLoggedIn,isreviewAuthor,wrapAsync(reviewController.destroyReview));


module.exports = router;