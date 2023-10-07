import { GatsbyNode } from "gatsby"

// export const createSchemaCustomization: GatsbyNode["createSchemaCustomization"] = ({ actions }) => {
//   actions.createTypes(`
//     type Mdx implements Node  {
//       frontmatter: MdxFrontmatter!
//     }

//     type MdxFrontmatter {
//       title: String!
//       date(
//         formatString: String
//         fromNow: Boolean
//         difference: String
//         locale: String
//       ): Date!
//       slug: String!
//       hero_image: File
//       hero_image_alt: String!
//       hero_image_credit_text: String!
//       hero_image_credit_link: String!
//     }
//   `)
// }