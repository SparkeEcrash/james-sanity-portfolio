import {defineField, defineType} from 'sanity'
import {SparkleIcon} from '@sanity/icons'

export default defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  icon: SparkleIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})
