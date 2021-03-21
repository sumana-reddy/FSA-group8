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
        path: '/create'
    });
};

exports.postLocationCreate = async (req, res, next) => {

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

exports.getLocationEdit = (req, res, next) => {

    let locationId = req.params.locationId;

    db.Location.findByPk(locationId).then(location => {

        location.locationId = locationId;

        res.render('location/edit', {
            pageTitle: 'Location edit',
            path: '/edit',
            location: location
        });

    }).catch(err => {
        console.log(err);
    });

};

exports.postLocationEdit = async (req, res, next) => {

    console.log("location: ", req.body);

    let updatedName = req.body.name;
    let updatedlatitude = req.body.coordinate1[0] + '#' + req.body.coordinate2[0] + '#' + req.body.coordinate3[0] + '#' + req.body.coordinate4[0];
    let updatedlongitude = req.body.coordinate1[1] + '#' + req.body.coordinate2[1] + '#' + req.body.coordinate3[1] + '#' + req.body.coordinate4[1];

    db.Location.findByPk(req.body.locationId).then(location => {

        location.name = updatedName;
        location.latitude = updatedlatitude;
        location.longitude = updatedlongitude;
        location.createdAt = new Date().toDateString();
        location.updatedAt = new Date().toDateString();
        return location.save();

    }).then(result => {
        console.log('UPDATED PRODUCT!');
        res.redirect('/list');
    }).catch(err => {
        console.log(err);
    });
};

exports.deleteLocation = async (req, res, next) => {

    let locationId = req.params.locationId;

    db.Location.findByPk(locationId).then(location => {
        console.log("location: ", location)
        return location.destroy();
    }).then(result => {
        console.log('DELETED PRODUCT!');
        res.redirect('/list');
    }).catch(err => {
        console.log(err);
    });


}