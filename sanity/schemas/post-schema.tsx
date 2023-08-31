const post = { 
    name: 'post',
    title: 'Post',
    type: 'document',
    fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name' }
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
        name: 'mainImage',
        title: 'Main Image',
        type: 'image',
        options: {hotspot: true,},
        fields: [
            {
                name: 'alt',
                title: 'Alternative text',
                type: 'string',
            },
        ]
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    },
  ],
  preview: {
    select: {
        title: 'title',
        media: 'mainImage',
    },
  },
};

export default post;