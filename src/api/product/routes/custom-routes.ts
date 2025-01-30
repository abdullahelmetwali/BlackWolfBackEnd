module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/products/:type/:route',
            handler: 'custom-controllers.getProduct'
        },
        {
            method: 'GET',
            path: '/products/:type',
            handler: 'custom-controllers.getProducts'
        },
    ]
}