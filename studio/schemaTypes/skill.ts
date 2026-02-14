import { defineField, defineType } from 'sanity'

export const skill = defineType({
  name: 'skill',
  title: 'My Skills',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Skill Name',
      type: 'string',
      description: 'Example: Next.js, Tailwind,JS , React',
    }),
    defineField({
      name: 'level',
      title: 'Skill Level (0-100)',
      type: 'number',
      validation: (Rule) => Rule.min(0).max(100),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Frontend', value: 'frontend' },
          { title: 'Backend', value: 'backend' },
          { title: 'Tools', value: 'tools' },
        ],
      },
    }),
  ],
})