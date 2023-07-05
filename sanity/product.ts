const product = {
    name: 'product',
    type: 'document',
    title: 'Products',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Product Name'
        },
        {
            name: 'description',
            type: 'string',
            title: 'Product Description'
        },
        {
            name: 'image',
            type: 'array',
            title: 'Product Image',
            of : [{         // we use of for upload multiple images and datatype is array
                name : 'img',
                title : 'Image',
                type : 'image'
            }]
        },
    ]
}

export default product