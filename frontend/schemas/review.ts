import { defineField } from "sanity";

const review = {
  name: "review",
  title: "review",
  type: "document",
  fields: [
    defineField({
      name: "user",
      title: "User",
      type: "reference",
      to: [{ type: "user" }],
      validation : (Rule) => Rule.required(),
    }),
  ],
};
