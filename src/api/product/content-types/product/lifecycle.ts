export default {
    beforeCreate(event) {
        const { data } = event.params;
        if (data?.title) {
            data.route = data.title.toLowerCase().replaceAll(/ \s+/g, '-');
            console.log("✅ Generated Route:", data.route);
        }
    },
    async afterCreate(event) {
        const { data } = event.params;
        if (data?.title) {
            data.route = data.title.toLowerCase().replaceAll(/ \s+/g, '-');
        }
    },
    beforeUpdate(event) {
        const { data } = event.params;
        if (data?.title) {
            data.route = data.title.toLowerCase().replaceAll(/\s+ /g, '-');
        }
    }
}