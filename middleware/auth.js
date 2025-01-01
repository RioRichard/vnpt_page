const initializeAuth = (req, res, next) => {
    // Make auth status available to all templates
    res.locals.isAuthenticated = req.session.isAuthenticated || false;
    res.locals.user = req.session.user || null;
    next();
};

const isAuthenticated = (req, res, next) => {
    if (!req.session.isAuthenticated) {
        return res.redirect('/auth/login');
    }
    next();
};

const isAdmin = (req, res, next) => {
    if (req.session.user && req.session.user.role === 'admin') {
        next();
    } else {
        res.status(403).render('error', {
            message: 'Bạn không có quyền truy cập trang này',
            error: {}
        });
    }
};

module.exports = {
    initializeAuth,
    isAuthenticated,
    isAdmin
};
