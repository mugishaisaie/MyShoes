// sanity/schemas/product.ts

export const product = {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Product Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'brand',
      title: 'Brand',
      type: 'reference',
      to: [{ type: 'brand' }],
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
    },
    {
      name: 'gender',
      title: 'Gender',
      type: 'string',
      options: {
        list: [
          { title: 'Men', value: 'men' },
          { title: 'Women', value: 'women' },
          { title: 'Kids', value: 'kids' },
          { title: 'Unisex', value: 'unisex' },
        ],
      },
    },
    {
      name: 'price',
      title: 'Price (RWF)',
      type: 'number',
      validation: (Rule: any) => Rule.required().min(0),
    },
    {
      name: 'discountPrice',
      title: 'Discount Price (RWF)',
      type: 'number',
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'images',
      title: 'Product Images',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'image',
              type: 'image',
              options: { hotspot: true },
            },
          ],
        },
      ],
    },
    {
      name: 'variants',
      title: 'Color Variants',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'colorName',
              title: 'Color Name',
              type: 'string',
            },
            {
              name: 'colorHex',
              title: 'Color Hex',
              type: 'string',
            },
            {
              name: 'images',
              title: 'Variant Images',
              type: 'array',
              of: [{ type: 'image' }],
            },
          ],
        },
      ],
    },
    {
      name: 'sizes',
      title: 'Sizes',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'sizeLabel',
              title: 'Size Label (e.g., 40)',
              type: 'string',
            },
            {
              name: 'inStock',
              title: 'In Stock',
              type: 'boolean',
              initialValue: true,
            },
            {
              name: 'stockQty',
              title: 'Stock Quantity',
              type: 'number',
            },
          ],
        },
      ],
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'New', value: 'new' },
          { title: 'Sale', value: 'sale' },
          { title: 'Popular', value: 'popular' },
        ],
      },
    },
    {
      name: 'isFeatured',
      title: 'Is Featured',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'isBestSeller',
      title: 'Is Best Seller',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    },
  ],
};
