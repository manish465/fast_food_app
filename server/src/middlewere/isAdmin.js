module.exports = (req, res, next) => {
    const { roles } = req.user;
    if (roles !== "Admin") {
        return res.status(400).json({ err: "You must be a admin" });
    }
    next();
};
