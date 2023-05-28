import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'skills',
  title: 'Skills',
  type: 'document',
  fields: [
    defineField({
      name: 'mySkills',
      title: 'My Tools',
      type: 'array',
      of: [{type: 'reference', to: {type: 'skill'}}],
    }),
  ],
})
