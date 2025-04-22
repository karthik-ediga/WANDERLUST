const Listing=require("../models/listing");

module.exports.filter = async (req, res) => {
    const { category } = req.query;
    const listings = await Listing.find({category});
    if(listings.length==0){
      req.flash("error","No listing related to this category found!");
      return  res.redirect("/listings");
    }
    res.render("listings/filter",{listings});
  };
  