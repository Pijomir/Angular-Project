const { catalogRouter } = require("../controllers/catalog");
const { userRouter } = require("../controllers/user");

function configRoutes(app) {
    app.use('/catalog', catalogRouter);
    app.use('/users', userRouter);
}

module.exports = { configRoutes };