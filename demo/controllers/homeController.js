exports.index = (req, res) => {
    res.render('pages/home', {
        title: 'VNPT TP. Cao Lãnh',
        activeNav: 'home'
    });
};
