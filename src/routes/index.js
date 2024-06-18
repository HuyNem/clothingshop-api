const productRouter = require('./ProductRouter');
const userRouter = require('./UserRouter');


const routes = (app) => {
    app.use('/product', productRouter);
    // app.use('/user', userRouter);
}

module.exports = routes;