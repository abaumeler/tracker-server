// Display not implemented
exports.index = function(req, res) {
    res.send('NOT IMPLEMENTED');
};

exports.login = function(req, res) {
    res.render('login', { message: 'welcome' });
};
