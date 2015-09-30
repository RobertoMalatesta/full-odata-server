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

export var model = attributes;