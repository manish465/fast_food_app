const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    hash_password: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    phone_no: {
        type: String,
        required: true,
    },
    roles: {
        type: String,
        default: "user",
    },
    picture: {
        type: String,
        default:
            "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-default-avatar-profile-icon-social-media-user-vector-portrait-176194876.jpg",
    },
});

module.exports = mongoose.model("Users", userSchema);
