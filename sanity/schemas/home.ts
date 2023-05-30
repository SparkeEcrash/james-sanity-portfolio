import {defineField, defineType} from 'sanity'
import {DocumentTextIcon} from '@sanity/icons'

export default defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
	icon: DocumentTextIcon,
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
    defineField({
      name: 'copyrightYear',
      title: 'Copyright Year',
      type: 'number',
    }),
  ],
})
