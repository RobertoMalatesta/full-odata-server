var attributes = {
    name: {
        type: 'String'
    },
    books: {
        type: 'Array',
        ref: 'Book'
    }
};

export var model = attributes;