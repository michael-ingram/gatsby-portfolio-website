export default {
  name: 'websites',
  title: 'Websites',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Website Name',
      type: 'string',
      description: 'Name of Website',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxlength: 100,
      },
    },
    {
      name: 'url',
      title: 'Website URL',
      type: 'string',
      description: 'websites url',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Website Description',
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};
