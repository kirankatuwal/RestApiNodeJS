const moongoos = require('mongoose');


const alienSchema = new moongoos.Schema({
    name: {
        type: String,
        required: true
    },
    tech: {
        type: String,
        required: true
    },
    sub: {
        type: String,
        required: true,
        default: false
    },
});

module.exports = moongoos.model('Alien', alienSchema);