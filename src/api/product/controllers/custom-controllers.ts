import { Context } from "vm";

module.exports = {
    async getProduct(context: Context) {
        const { type, route } = context.params;

        const products = await strapi.db.query('product').findMany({
            where: {
                type: type,
                route: { $ne: route },
                publishedAt: { $ne: null }
            }
        });

        const product = await strapi.db.query('product').findOne({
            where: {
                route: route,
                publishedAt: { $ne: null }
            },
        });

        if (!product) {
            return context.notFound('Product Not found');
        }

        return { product, products };
    },
    async getProducts(context: Context) {
        const { type } = context.params;
        let products = [];

        if (type === '') {
            products = await strapi.db.query('product').findMany({
                where: {
                    type: '',
                    publishedAt: { $ne: null }
                }
            });
        } else {
            products = await strapi.db.query('product').findMany({
                where: {
                    type: type,
                    publishedAt: { $ne: null }
                }
            });
        }

        return { products };
    },
}