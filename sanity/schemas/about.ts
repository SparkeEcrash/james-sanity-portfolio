import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    defineField({
      name: 'header',
      title: 'Header',
      type: 'string',
    }),
    defineField({
      name: 'story',
      title: 'Background Information',
      type: 'text',
    }),
    defineField({
      name: 'aboutPic',
      title: 'My Picture on About Page',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})
