const express=require("express");
const router=express.Router();
const wrapAsync=require("../utils/wrapAsync.js");
const listingController=require("../controllers/search");

router.get("/",wrapAsync(listingController.search));

module.exports=router;