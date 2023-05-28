import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'company',
  title: 'Company',
  type: 'object',
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
			name: 'techs',
			title: 'Tech Stack Used',
			type: 'array',
			of: [{type: 'reference', to: {type: 'skill'}}],
		})
  ],
})
