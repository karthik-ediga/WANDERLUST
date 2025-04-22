const express=require("express");
const router=express.Router();
const wrapAsync=require("../utils/wrapAsync.js");
const listingController=require("../controllers/privacy");

router.get("/",wrapAsync(listingController.privacy));

module.exports=router;