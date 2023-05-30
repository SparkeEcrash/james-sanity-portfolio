import {defineField, defineType} from 'sanity'
import {DocumentTextIcon} from '@sanity/icons'

export default defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'jobs',
      title: 'Jobs',
      type: 'array',
      of: [{type: 'reference', to: {type: 'job'}}],
    }),
    defineField({
      name: 'techListHeader',
      title: 'Header for Tech Stacks List',
      type: 'string',
    }),
  ],
})
