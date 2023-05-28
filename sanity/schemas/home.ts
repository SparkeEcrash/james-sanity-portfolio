import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  fields: [
    defineField({
      name: 'header',
      title: 'Header',
      type: 'string',
    }),
    defineField({
      name: 'subheader',
      title: 'Subheader',
      type: 'string',
    }),
    defineField({
      name: 'profilePic',
      title: 'My Profile Picture',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'socials',
      title: 'Social Links',
      type: 'array',
      of: [{type: 'reference', to: {type: 'social'}}],
    }),
  ],
})
