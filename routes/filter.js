const express=require("express");
const router=express.Router();
const wrapAsync=require("../utils/wrapAsync.js");
const listingController=require("../controllers/filter");

router.get("/",wrapAsync(listingController.filter));

module.exports=router;