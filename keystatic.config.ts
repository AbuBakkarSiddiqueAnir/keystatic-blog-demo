// keystatic.config.ts
import { config, fields, collection } from "@keystatic/core";

export default config({
  storage: {
    kind: "local",
  },
  collections: {
    posts: collection({
      label: "Posts",
      slugField: "title",
      path: "src/content/posts/*",
      format: { contentField: "content" },

      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        date: fields.date({
          label: "Event date",
          description: "The date of the event",
        }),
        content: fields.document({
          label: "Content",
          formatting: true,
          dividers: true,
          links: true,
          images: true,
        }),
        avatar: fields.image({
          label: "Avatar",
          description: "The avatar for this user",
          // This will output the images in the "public" directory
          directory: "public/images/avatars",
          publicPath: "/images/avatars/",
        }),
      },
    }),
  },
});
