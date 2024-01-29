import { Rule } from "postcss";
import { title } from "process";
import { defineField } from "sanity";

const roomTypes = [
  { title: "Basic", value: "basic" },
  { title: "Luxury", value: "Luxury" },
  { title: "Suite", value: "suite" },
];

const hotelRoom = {
  name: "hotelRoom",
  title: "Hotel Room",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) =>
        Rule.required().max(50).error("Maximum 50 Characters"),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "name",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "desription",
      title: "Description",
      type: "text",
      validation: (Rule) =>
        Rule.required().min(100).error("Minimum 100 Characters"),
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
    }),
    defineField({
      name: "discount",
      title: "Description",
      type: "number",
      validation: (Rule) => Rule.min(0),
      initialValue: 0,
    }),
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "url", type: "url", title: "URL" },
            { name: "file", type: "file", title: "File" },
          ],
        },
      ],
      validation: (Rule) =>
        Rule.required().min(3).error("Minimum of 3 images required"),
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "object",
      fields: [
        { name: "url", type: "url", title: "URL" },
        { name: "file", type: "file", title: "File" },
      ],
      validation: (Rule) => Rule.required().error("Cover Image is required"),
    }),
    defineField({
      name: "type",
      title: "Room Type",
      type: "string",
      options: {
        list: roomTypes,
      },
      validation: (Rule) => Rule.required(),
      initialValue: "basic",
    }),
    defineField({
      name: "specialNote",
      title: "Special Note",
      type: "text",

      validation: (Rule) => Rule.required(),
      initialValue:
        "Ceck in time is 11.30 AM.Check out is at 11 AM,if you leave after this hour,it will be a penalty charge of 34.99 Pounds ",
    }),
    defineField({
      name: "dimension",
      title: "Dimension",
      type: "string",
    }),
    defineField({
      name: "numberOfBeds",
      title: "Number of Beds",
      type: "number",
      validation: (Rule) => Rule.min(1),
      initialValue: 1,
    }),
    defineField({
      name: "offerAmenities",
      title: "Offer Amenities",
      type: "array",
      of: [{ type: "object", fields: [{ name: "icon", title: "Icon", type: "string" }, 
    {name: "amenity", title: "Amenity", type: "string"}] }],
    }),
    defineField({
      name: "isBooked",
      title: "Is Booked",
      type : "boolean",
      initialValue: false,
    }),
    defineField({
      name: "isFeatured",
      title: "Is Featured",
      type : "boolean",
      initialValue: false,
    }),
    defineField({
      name: "reviews",
      title: "Reviews",
      type : "array",
      of: [{type: "review"}],
    })
  ],
};

export default hotelRoom;
