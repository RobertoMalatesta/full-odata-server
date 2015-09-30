var attributes = {
    title: {
        type: 'String'
    },
    price: {
        type: 'Number'
    },
    categories: {
        type: 'Array',
        ref: 'Category'
    },
    author: {
        ref: 'Author'
    }
};
exports.model = attributes;
