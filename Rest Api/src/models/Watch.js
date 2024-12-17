const { Schema, model, Types } = require('mongoose');

const watchSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description : {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    author: {
        type: Types.ObjectId,
        ref: 'User'
    }
});

const Watch = model('Watch', watchSchema);

module.exports = { Watch };