const Item = require("../models/item");

exports.add = (req, res) => {
    const { main_pic, name, restaurant, description, rating, type } = req.body;

    if (!name || !restaurant || !description || !type) {
        return res.status(400).json({ err: "Invelid Inputs" });
    }

    const _item = new Item({
        main_pic,
        name,
        restaurant,
        description,
        rating,
        type,
    });

    _item
        .save()
        .then(() => {
            return res.status(200).json({ msg: "Item added" });
        })
        .catch((err) => {
            return res.status(400).json({ msg: err.message });
        });
};
