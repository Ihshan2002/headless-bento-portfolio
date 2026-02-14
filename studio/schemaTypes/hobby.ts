import { defineField, defineType } from 'sanity'

export const hobby = defineType({
  name: 'hobby',
  title: 'Hobbies & Awards',
  type: 'document',
  fields: [
    defineField({ 
      name: 'name', 
      title: 'Hobby Name', 
      type: 'string', 
      description: 'Example: Chess, Pool, or Photography' 
    }),
    

    defineField({
      name: 'emoji',
      title: 'Hobby Emoji',
      type: 'string',
      description: 'Put 🎱 for Pool or ♟️ for Chess'
    }),

    defineField({ name: 'description', title: 'Short Description', type: 'text' }),
    defineField({ name: 'awardTitle', title: 'Award Title', type: 'string' }),
    
    defineField({ 
      name: 'awardLink', 
      title: 'Achievement Link', 
      type: 'url',
      description: 'Link to your Chess.com profile or Pool tournament result'
    }),

    defineField({
      name: 'icon',
      title: 'Hobby Icon/Image',
      type: 'image',
      options: { hotspot: true }
    }),
  ],
})