export default {
  name: 'resume',
  title: 'Resume',
  type: 'document',
  fields: [
    {
      name: 'description',
      type: 'string',
      title: 'Description',
    },
    {
      name: 'file',
      type: 'file',
      title: 'Application File',
    },
  ]
}