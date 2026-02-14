import { defineField, defineType } from 'sanity'

export const profile = defineType({
  name: 'profile',
  title: 'About Me',
  type: 'document',
  fields: [
    defineField({ 
      name: 'name', 
      type: 'string', 
      title: 'Full Name' 
    }),
    defineField({ 
      name: 'role', 
      type: 'string', 
      title: 'Job Role' 
    }),
    defineField({ 
      name: 'bio', 
      type: 'text', 
      title: 'Short Bio' 
    }),
    defineField({
      name: 'image',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})