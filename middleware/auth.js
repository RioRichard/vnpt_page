exports.initializeAuth = (req, res, next) => {
    // Make auth status available to all templates
    res.locals.isAuthenticated = req.session.isAuthenticated || false;
    res.locals.user = req.session.user || null;
    next();
};

exports.requireAuth = (req, res, next) => {
    if (!req.session.isAuthenticated) {
        return res.redirect('/auth/login');
    }
    next();
};
