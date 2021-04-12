const User = require("../models/auth");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

exports.signUp = (req, res) => {
    const {
        name,
        email,
        password_1,
        password_2,
        address,
        phone_no,
        profile_pic,
        roles,
    } = req.body;

    if (
        !name ||
        !email ||
        !password_1 ||
        !password_2 ||
        !address ||
        !phone_no
    ) {
        return res.status(400).json({ err: "Invelid Inputs" });
    }

    User.findOne({ email, phone_no }).then((user) => {
        if (user) {
            return res.status(400).json({ err: "User Exists" });
        }
        if (password_1 !== password_2) {
            return res
                .status(400)
                .json({ err: "Both password should be same" });
        }

        hash_password = bcrypt.hashSync(password_1, 10);

        const _user = new User({
            name,
            email,
            hash_password,
            address,
            phone_no,
            roles,
            profile_pic,
        });

        _user
            .save()
            .then(() => {
                return res.status(201).json({ msg: "Sign up Complete" });
            })
            .catch((err) => {
                return res.status(400).json({ msg: err.message });
            });
    });
};

exports.signIn = (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ err: "Invelid Inputs" });
    }

    User.findOne({ email }).then((user) => {
        if (!user) {
            return res.status(400).json({ err: "User not found" });
        }
        bcrypt
            .compare(password, user.hash_password)
            .then((result) => {
                if (result) {
                    const token = jwt.sign(
                        { _id: user._id },
                        process.env.JWT_SECRET,
                    );
                    return res.status(201).json({ token });
                } else {
                    return res.status(422).json({ err: "Invelid input" });
                }
            })
            .catch((err) => console.log(err));
    });
};

exports.signOut = (req, res) => {
    req.headers.authorization = undefined;
    req.user = undefined;
    return res.status(200).json({ msg: "Logged out" });
};
