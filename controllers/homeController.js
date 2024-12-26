exports.index = (req, res) => {
    res.render('home/index', {
        title: 'VNPT TP. Cao Lãnh',
        activeNav: 'home'
    });
};
