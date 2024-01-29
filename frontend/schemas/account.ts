import { title } from "process";
import { defineField } from "sanity";

const account = {
    name: "account",
    title : "Account",
    type: "document",
    fields: [
        defineField({
            name: "providerType",
            type: "string",
        }),
        defineField({
            name: "providerId",
            type: "string",
        }),
        defineField({
            name: "providerAccountId",
            type: "string",
        }),
        defineField({
            name: "refreshToken",
            type: "string",
        }),
        defineField({
            name: "accesToken",
            type: "string",
        }),
        defineField({
            name: "accesTokenExpires",
            type: "number",
        }),
        defineField({
            name: "user",
            title: "user",
            type: "reference",
            to: { type: "user" }
        }),
        
    ],
}

export default account;