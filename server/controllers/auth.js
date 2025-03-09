exports.check = (req, res, next) => {
    res.status(200).json({
        isAuthenticated: true
    })
}