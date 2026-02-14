import { defineField, defineType } from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'My Projects',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Project Title', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({ name: 'image', title: 'Project Screenshot', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'link', title: 'Live Demo Link', type: 'url' }),
    defineField({ name: 'github', title: 'GitHub Link', type: 'url' }),
    defineField({
      name: 'tech',
      title: 'Technologies Used',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
})