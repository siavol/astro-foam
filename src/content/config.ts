import { z, defineCollection } from 'astro:content';

const journal = defineCollection({
    type: 'content'
});
const books = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        author: z.string(),
        isbn: z.optional(z.string()),
        type: z.literal('book')
    })
});

export const collections = {
    'journal': journal,
    'books': books
};
