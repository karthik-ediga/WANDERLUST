const express=require("express");
const router=express.Router();
const wrapAsync=require("../utils/wrapAsync.js");
const listingController=require("../controllers/terms");

router.get("/",wrapAsync(listingController.terms));

module.exports=router;