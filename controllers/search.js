const Listing=require("../models/listing");

module.exports.search = async (req, res) => {
    const {dest}=req.query;
    const listing=await Listing.findOne({title:dest});
    if(listing){
       return  res.render("listings/show.ejs",{listing});
    }
    req.flash("error","No such place found!");
    res.redirect("/listings");
};