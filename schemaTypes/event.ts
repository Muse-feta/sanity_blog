import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
      name: 'eventTitle',
      title: 'Event Title',
      type: 'string',
    }),
    defineField({
      name: 'eventImage',
      title: 'Event Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'eventDate',
      title: 'Event Date',
      type: 'datetime',
    }),
    defineField({
      name: 'eventDescription',
      title: 'Event Description',
      type: 'text',
    }),
  ],

  preview: {
    select: {
      title: 'eventTitle',
      media: 'eventImage',
    },
    prepare(selection) {
      return {...selection}
    },
  },
})
