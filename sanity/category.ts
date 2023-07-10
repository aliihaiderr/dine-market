import {defineType, defineField} from 'sanity';

// defineType() is for document intelesense.
// defineField() is for field intelesense.

const category = defineType(
    {
        name: 'category',
        type: 'document',
        title: 'Category',
        fields: [
            defineField(
                {
                    name: 'name',
                    type: 'string',
                    title: 'Category Name'
                }
            ),
        ]
    }
)

export default category