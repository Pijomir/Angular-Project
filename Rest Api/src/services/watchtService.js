const { Watch } = require('../models/Watch');

async function getAll() {
    return Watch.find().lean();
}

async function getByAuthorId(id) {
    return Watch.find({ author: id }).lean();
}

async function getById(id) {
    return Watch.findById(id).lean();
}

async function create(data, authorId) {
    const record = new Watch({
        name: data.name,
        description: data.description,
        image: data.image,
        author: authorId
    });

    await record.save();

    return record;
}

async function update(id, data, userId) {
    const record = await Watch.findById(id);

    if (!record) {
        throw new ReferenceError('Record not found ' + id);
    }

    if (record.author.toString() != userId) {
        throw new Error('Access denied');
    }

    record.name = data.name;
    record.description = data.description;
    record.image = data.image;

    await record.save();

    return record;
}

async function deleteById(id, userId) {
    const record = await Watch.findById(id);

    if (!record) {
        throw new ReferenceError('Record not found ' + id);
    }

    if (record.author.toString() != userId) {
        throw new Error('Access denied');
    }

    await Watch.findByIdAndDelete(id);
}

module.exports = {
    getAll,
    getByAuthorId,
    getById,
    create,
    update,
    deleteById
};