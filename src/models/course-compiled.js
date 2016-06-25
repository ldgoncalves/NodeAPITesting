const db = require('./db');

exports.create = (payload, err, success) => {
    db.course.create(payload).then(success).catch(err);
};

exports.findAll = (err, success) => {
    db.course.findAll().then(success).catch(err);
};

exports.find = (payload, err, success) => {
    db.course.find({
        where: {
            id: payload.id
        },
        //Find all relation defined in sequelize
        include: [{
            all: true,
            nested: true
        }]
    }).then(success).catch(err);
};

exports.update = (payload, err, success) => {
    db.course.find({
        where: {
            id: payload.id
        }
    }).then(existingData => {
        existingData.updateAttributes(payload).then(success).catch(err);
    }).catch(err);
};

exports.destroy = (payload, err, success) => {
    db.course.destroy({
        where: {
            id: payload.id
        }
    }).then(success).catch(err);
};

//# sourceMappingURL=course-compiled.js.map