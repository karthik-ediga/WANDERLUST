const express=require("express");
const router=express.Router({mergeParams:true});
const wrapAsync=require("../utils/wrapAsync.js");
const {validateReview,isLoggedIn,isReviewAuthor}=require("../middleware");
const  reviewController=require("../controllers/reviews");

//Post review Route
router.post("/",isLoggedIn,validateReview,wrapAsync(reviewController.createReview));

//Delete  review Route
router.delete("/:reviewId",isLoggedIn,isReviewAuthor,wrapAsync(reviewController.destroyReview));

module.exports=router;