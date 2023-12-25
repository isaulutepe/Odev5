var mongoose = require("mongoose");
var Venue = mongoose.model("venue");

const createResponse = function (res, status, content) {
    res.status(status).json(content);
};

const getComment = async function (req, res) {
    try {
        
        await Venue.findById(req.params.venueid)
            .select("name comments")
            .exec()
            .then(function (venue) {
                var response, comment;
                if (!venue) {
                    createResponse(res, 404, {
                        status: "venueid bulunamadı",
                    });
                    return;
                } else if (venue.comments && venue.comments.length > 0) {
                    comment = venue.comments.id(req.params.commentid);
                    if (!comment) {
                        createResponse(res, 404, {
                            status: "commentid bulunamadı",
                        });
                    } else {
                        response = {
                            venue: {
                                name: venue.name,
                                id: req.params.venueid,
                            },
                            comment: comment,
                        };
                        createResponse(res, 200, response);
                    }
                } else {
                    createResponse(res, 404, {
                        status: "Hiç yorum yok",
                    });
                }
            });
    } catch (error) {
        createResponse(res, 404, {
            status: "venueid bulunamadı.",
        });
    }
};


const addComment = function (req, res) {
    createResponse(res, "200", { status: "success" });
};

const deleteComment = function (req, res) {
    createResponse(res, "200", { status: "success" });
};

const updateComment = function (req, res) {
    createResponse(res, "200", { status: "success" });
};

module.exports = {
    getComment,
    addComment,
    updateComment,
    deleteComment,
};
