import { defineField } from "sanity";

const user = {
  name: "user",
  title: "user",
  type: "document",
  fields: [
    defineField({
      name: "isAdmin",

      title: "is Admin",
      type: "boolean",
      description: "Check if user is admin",
      initialValue: false,
      validation: (Rule) => Rule.required(),
      //  readOnly: true,
      //  hidden: true
    }),
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      description: "Name of the user",
      readOnly: true,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "url",
    }),
    defineField({
      name: "password",
      type: "string",
      hidden: true,
    }),defineField ({
        name: "about",
        title: "About",
        type: "text",
        description: "Abrief description of the user",

    })
  ],
};

export default user;
