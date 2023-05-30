import {defineField, defineType} from 'sanity'
import {CaseIcon} from '@sanity/icons'

export default defineType({
  name: 'job',
  title: 'Job',
  type: 'document',
  icon: CaseIcon,
  fields: [
    defineField({
      name: 'jobTitle',
      title: 'My Job Title',
      type: 'string',
    }),
    defineField({
      name: 'companyName',
      title: 'Company Name',
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
    defineField({
      name: 'companyLocation',
      title: 'Company Location',
      type: 'string',
    }),
    defineField({
      name: 'dateStarted',
      title: 'Date Started',
      type: 'date',
    }),
    defineField({
      name: 'dateEnded',
      title: 'Date Ended',
      type: 'date',
    }),
    defineField({
      name: 'jobSummary',
      title: 'Job Summary',
      type: 'text',
    }),
    defineField({
      name: 'techs',
      title: 'Tech Stack Used',
      type: 'array',
      of: [{type: 'reference', to: {type: 'skill'}}],
    }),
  ],
})
