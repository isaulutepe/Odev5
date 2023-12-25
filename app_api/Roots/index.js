var express = require("express");
var router = express.Router();
var ctrlVenues = require("../Controllers/VenueController");
var ctrlcomments = require("../Controllers/CommentController");


router
    .route("/venues")
    .get(ctrlVenues.listVenues)
    .post(ctrlVenues.addVenue);


router
    .route("/venues/:venueid")
    .get(ctrlVenues.getVenue)
    .put(ctrlVenues.updateVenue)
    .delete(ctrlVenues.deleteVenue);

router
    .route("/venues/:venueid/comments")
    .post(ctrlcomments.addComment);

router
    .route("/venues/:venueid/comments/:commentid")
    .get(ctrlcomments.getComment)
    .put(ctrlcomments.updateComment)
    .delete(ctrlcomments.deleteComment);

module.exports = router; //Artık görünür hale geldi.