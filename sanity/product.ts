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
            name: 'type',
            type: 'string',
            title: 'Product Type',
            options: {
                list: [
                  {title: 'Sweater', value: 'sweater'},
                  {title: 'Dress', value: 'dress'},
                  {title: 'Pant', value: 'pant'},
                  {title: 'Jacket', value: 'jacket'},
                  {title: 'T Shirt', value: 't shirt'},
                ],
                layout: 'radio'
              }
        },
        {
            name: 'category',
            type: 'string',
            title: 'Product Category',
            options: {
                list: [
                  {title: 'Women', value: 'women'},
                  {title: 'Men', value: 'men'},
                  {title: 'Kids', value: 'kids'},
                ],
                layout: 'radio'
              }
        },
        {
            name: 'price',
            type: 'number',
            title: 'Product Price'
        },
        {
            name: 'description',
            type: 'text',
            title: 'Product Description'
        },
        {
            name: 'care',
            type: 'array',
            title: 'Product Care',
            of : [{         
                type : 'string'
            }],
            options: {
                list: [
                    {title: 'Hand wash using cold water.', value: 'opt1'},
                    {title: 'Do not using bleach.', value: 'opt2'},
                    {title: 'Hang it to dry.', value: 'opt3'},
                    {title: 'Iron on low temperature.', value: 'opt4'},
                ]
              }
        },
        {
            name: 'image',
            type: 'array',
            title: 'Product Image',
            // The of property specifies which value types the array may hold.
            of : [{         
                name : 'img',
                title : 'Image',
                type : 'image'
            }]
        },
    ]
}

export default product