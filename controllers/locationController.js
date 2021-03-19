exports.getIndex = (req, res, next) => {
    res.render('index', {
        pageTitle: 'Index',
        path: '/'
    });
};

exports.getLocationList = (req, res, next) => {
    res.render('location/list', {
        pageTitle: 'Location list',
        path: '/list'
    });
};

exports.getLocationCreate = (req, res, next) => {
    res.render('location/create', {
        pageTitle: 'Location create',
        path: '/list/create'
    });
};