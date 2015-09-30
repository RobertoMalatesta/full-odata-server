var attributes = {
    name: {
        type: 'String'
    },
    books: {
        type: 'Array',
        ref: 'Book'
    }
};
exports.model = attributes;
