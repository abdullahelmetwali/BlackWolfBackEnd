// custom controllers i create for routes i have created in custom-routes.ts
export default {
    async getProduct(context) {
        const { type, route } = context.params;
        const products = await strapi.db.query('api::product.product').findMany({
            where: {
                type: type,
                route: { $ne: route },
                publishedAt: { $ne: null }
            }
        });
        const product = await strapi.db.query('api::product.product').findOne({
            where: {
                route: { $eq: route },
                publishedAt: { $ne: null }
            },
        });
        if (!product) {
            return context.notFound('Product Not found');
        }
        return { product, products };
    },

    async getProducts(context) {
        const { type } = context.params;
        let products = [];
        if (type === '') {
            products = await strapi.db.query('api::product.product').findMany({
                where: {
                    publishedAt: { $ne: null }
                }
            });
        } else {
            products = await strapi.db.query('api::product.product').findMany({
                where: {
                    type: type,
                    publishedAt: { $ne: null }
                }
            });
        }
        return { products };
    },
}