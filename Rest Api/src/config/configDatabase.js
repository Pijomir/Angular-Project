const mongoose = require('mongoose');
require('../models/User');
require('../models/Watch');

async function configDatabase() {
    const connectionString = 'mongodb://localhost:27017/microbrand-watches';

    await mongoose.connect(connectionString);

    console.log('Database connected');
    
}

module.exports = { configDatabase };