import {defineField, defineType} from 'sanity'
import {SparklesIcon} from '@sanity/icons'

export default defineType({
  name: 'skills',
  title: 'Skills',
  type: 'document',
	icon: SparklesIcon,
  fields: [
		defineField({
      name: 'myToolsListHeader',
      title: 'Header for My Tools List',
      type: 'string',
    }),
    defineField({
      name: 'mySkills',
      title: 'My Tools',
      type: 'array',
      of: [{type: 'reference', to: {type: 'skill'}}],
    }),
  ],
})
