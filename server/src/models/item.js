const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
    main_pic: {
        type: String,
        default:
            "https://img.freepik.com/free-photo/front-view-burger-stand_141793-15542.jpg?size=626&ext=jpg",
    },
    name: {
        type: String,
        required: true,
    },
    restaurant: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model("Item", itemSchema);
