const textBlocksPartial = [
  { type: 'block' },
  { 
    type: 'reference',
    to: { type: 'product' } 
  },
  {
    type: 'image',
    fields: [
      { 
        type: 'string',
        name: 'caption',
        title: 'Caption'
      }
    ]
  },
];

const sectionBlocksPartial = [
  {
    type: 'object',
    title: 'Hero banner',
    name: 'heroBanner',
    fields: [
      {
        name: 'superheading',
        title: 'Superheading',
        type: 'string',
      },
      {
        name: 'heading',
        title: 'Heading',
        type: 'string',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
      },
      {
        name: 'actions',
        title: 'Actions',
        type: 'array',
        of: [{ 
          type: 'object',
          fields: [
            {
              name: 'text',
              type: 'string',
            },
            {
              name: 'href',
              type: 'url',
            },
          ]
        }]
      },
    ]
  },
  {
    type: 'object',
    title: 'Text blocks',
    name: 'textBlocks',
    fields: [
      {
        name: 'heading',
        title: 'Heading',
        type: 'string',
      },
      {
        name: 'body',
        title: 'Body',
        type: 'array',
        of: textBlocksPartial,
      },
    ]
  }
];

export const schemaTypes = [
  {
    type: "document",
    name: "product",
    title: "Product",
    description: 'A product offered in the store.',
    fields: [
      {
        title: "Product name",
        name: "productName",
        type: "string",
      },
      {
        title: "Slug",
        name: "slug",
        type: "slug",
        options: {
          source: "productName"
        }
      },
      {
        title: 'Product image',
        name: 'productImage',
        type: 'image',
      },
      {
        title: "Price",
        name: "price",
        description: 'The price of the product in American dollars (USD)',
        type: "number",
      },
      {
        title: "Summary",
        name: "summary",
        description: 'A short summary of the product.',
        type: "array",
        of: [
          { 
            type: "block",
            styles: [{title: 'Normal', value: 'normal'}],
            lists: [],
          },
        ]
      },
      {
        title: "Product description",
        name: "productDescription",
        type: "array",
        of: textBlocksPartial,
      },
      {
        title: "Related products",
        name: "relatedProducts",
        type: "array",
        of: [
          { type: 'reference', to: { type: 'product' } },
        ]
      },
    ]
  },
  {
    type: "document",
    name: "article",
    title: "Article",
    fields: [
      {
        title: 'Title',
        name: 'title',
        type: 'string',
      },
      {
        title: 'Slug',
        name: 'slug',
        type: 'slug',
        options: {
          source: 'title'
        }
      },
      {
        title: 'Body',
        name: 'body',
        type: 'array',
        of: textBlocksPartial,
      }
    ]
  },
  {
    type: "document",
    name: "page",
    title: "Page",
    fields: [
      {
        title: 'Title',
        name: 'title',
        type: 'string',
      },
      {
        title: 'Slug',
        name: 'slug',
        type: 'slug',
        options: {
          source: 'title'
        }
      },
      {
        title: 'Sections',
        name: 'sections',
        type: 'array',
        of: sectionBlocksPartial,
      },
    ]
  }
]
