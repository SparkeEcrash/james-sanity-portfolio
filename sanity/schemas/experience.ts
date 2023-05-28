import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'companies',
      title: 'Companies',
      type: 'array',
      of: [{type: 'reference', to: {type: 'company'}}],
    }),
  ],
})
