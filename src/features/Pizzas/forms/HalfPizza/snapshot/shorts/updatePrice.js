export function updatePrice(shorts, info) {
    const branch = {};

    for (let key in shorts) {
        branch[key] = {
            preview: {
                price: info[key].price,
            },
        };
    }

    return branch;
}