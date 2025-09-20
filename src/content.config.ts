// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Import loader(s)
import { glob } from 'astro/loaders';

// 3. Define your collection(s)
const projects = defineCollection({ 
    loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
    schema: z.object({
        title: z.string(),
        projectLink: z.object({ // optionally shows `@ example.com` after title
            text: z.string(),
            url: z.string(),
        }).optional(),
        first: z.boolean().optional(), // specifies which is displayed first for styling reasons
        subheading: z.string().optional(), // for dates and other important info
        image: z.object({
            src: z.string(),
            alt: z.string(),
        }).optional(),
        technologies: z.array(z.object({
            title: z.string(),
            iconName: z.string().optional(),
        })),

      })
});

const experience = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/experience" }),
    schema: z.object({
        role: z.string(),
        company: z.object({
            name: z.string(),
            url: z.string(),
        }),
        first: z.boolean().optional(),
        subheading: z.string().optional(),
        image: z.object({
            src: z.string(),
            alt: z.string(),
        }).optional(),
    })
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { projects, experience };