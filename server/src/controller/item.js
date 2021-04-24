const Item = require("../models/item");

exports.add = (req, res) => {
    const { name, restaurant, description, rating, type } = req.body;

    if (!name || !restaurant || !description || !type || !req.file) {
        return res.status(400).json({ err: "Invelid Inputs" });
    }

    const _item = new Item({
        main_pic: req.file.path,
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

exports.showAll = (_req, res) => {
    Item.find()
        .then((result) => {
            return res.status(200).json({ result });
        })
        .catch((err) => {
            console.log(err);
        });
};

exports.showOne = (req, res) => {
    const _id = req.params.id;

    Item.findById({ _id })
        .then((result) => {
            return res.status(200).json({ result });
        })
        .catch(() => {
            return res.status(400).json({ err: "Somthing went wrong" });
        });
};
