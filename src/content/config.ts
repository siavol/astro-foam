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
const cards = defineCollection({
    type: 'cards',
    schema: z.object({
        title: z.string(),
        date: z.string(),
        tags: z.optional(z.array(z.string()))
    })
});

export const collections = {
    'journal': journal,
    'books': books,
    'cards': cards
};
