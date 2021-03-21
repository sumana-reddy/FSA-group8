const db = require('../models');

exports.getIndex = async (req, res, next) => {
    res.render('index', {
        pageTitle: 'Index',
        path: '/'
    });
};

exports.getLocationList = (req, res, next) => {
    db.Location.findAll().then(list => {

        res.render('location/list', {
            pageTitle: 'Location list',
            path: '/list',
            locationList: list
        });
    });
};

exports.getLocationCreate = async (req, res, next) => {

    res.render('location/create', {
        pageTitle: 'Location create',
        path: '/list/create'
    });
};

exports.postLocationCreate =  async (req, res, next) => {

    let latitude = req.body.coordinate1[0] + '#' + req.body.coordinate2[0] + '#' + req.body.coordinate3[0] + '#' + req.body.coordinate4[0];
    let longitude = req.body.coordinate1[1] + '#' + req.body.coordinate2[1] + '#' + req.body.coordinate3[1] + '#' + req.body.coordinate4[1];

    await db.Location.create({
        name: req.body.name,
        type: 'quad',
        latitude: latitude,
        longitude: longitude,
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString()
    });

    res.redirect('/list');
}

exports.getLocationEdit = async (req, res, next) => {



};

exports.postLocationEdit = async (req, res, next) => {



};