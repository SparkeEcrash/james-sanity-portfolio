import {defineConfig} from 'sanity'
import {deskTool, StructureBuilder, StructureResolverContext} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {DocumentTextIcon} from '@sanity/icons'
import {CaseIcon} from '@sanity/icons'
import {SparklesIcon} from '@sanity/icons'
import {UsersIcon} from '@sanity/icons'

const structure = (S: StructureBuilder, context: StructureResolverContext) => {
  //console.log(context)
  return S.list()
    .title('Pages')
    .items([
      S.listItem()
        .title('Home Page')
        .icon(DocumentTextIcon)
        .child(S.document().title('Home Page').id('home-page').schemaType('home')),
      S.listItem()
        .title('About Page')
        .icon(DocumentTextIcon)
        .child(S.document().title('About Page').id('about-page').schemaType('about')),
      S.listItem()
        .title('Experience Page')
        .icon(DocumentTextIcon)
        .child(
          S.document().title('Experience Page').id('experience-page').schemaType('experience')
        ),
      S.listItem()
        .title('Skills Page')
        .icon(DocumentTextIcon)
        .child(S.document().title('Skills Page').id('skills-page').schemaType('skills')),
      S.divider(),
      S.listItem()
        .title('Jobs')
        .icon(CaseIcon)
        .child(S.documentList().title('Jobs').schemaType('job').filter('_type == "job"')),
      S.listItem()
        .title('Skills')
        .icon(SparklesIcon)
        .child(
          S.documentList()
            .title('Skills')
            .schemaType('skill')
            .filter('_type == "skill"')
            .defaultOrdering([{field: 'name', direction: 'asc'}])
        ),
      S.listItem()
        .title('Social Links')
        .icon(UsersIcon)
        .child(
          S.documentList()
            .title('Social Links')
            .schemaType('social')
            .filter('_type == "social"')
            .defaultOrdering([{field: 'name', direction: 'asc'}])
        ),
    ])
  // return S.documentTypeList('social')
}

export default defineConfig({
  name: 'default',
  title: "James's Portfolio",
  projectId: 'pbt0sttr',
  dataset: 'production',
  plugins: [deskTool({structure}), visionTool()],
  schema: {
    types: schemaTypes,
  },
})
