import { defineField } from "sanity"

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
                  {title: 'Sweater', value: 'Sweater'},
                  {title: 'Dress', value: 'Dress'},
                  {title: 'Pant', value: 'Pant'},
                  {title: 'Jacket', value: 'Jacket'},
                  {title: 'T Shirt', value: 'T Shirt'},
                ],
                layout: 'radio'
              }
        },
        defineField(
            {
            name: 'category',
            type: 'reference',
            title: 'Product Category',
            to: [
                {
                    type : 'category'
                },
            ]
          }
        ),
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
                    {title: 'Hand wash using cold water', value: 'Hand wash using cold water.'},
                    {title: 'Do not using bleach', value: 'Do not using bleach.'},
                    {title: 'Hang it to dry', value: 'Hang it to dry.'},
                    {title: 'Iron on low temperature', value: 'Iron on low temperature.'},
                ]
              }
        },
        {
            name: 'image',
            type: 'array',
            title: 'Product Image',
            // The of property specifies which value types the array may hold.
            of : [{         
                type : 'image'
            }]
        },
    ]
}

export default product