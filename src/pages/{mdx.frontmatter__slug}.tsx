import * as React from 'react'
import { graphql, PageProps } from 'gatsby'
import { GatsbyImage, getImage, ImageDataLike } from 'gatsby-plugin-image'
import Layout from '../components/Layouts'
import Seo from '../components/Seo'

const BlogPost = ({data, children}: PageProps<Queries.MdxPageQuery>) => {
  if (!data || !data.mdx || !data.mdx.frontmatter) {
    return <Layout pageTitle={"Error"}><>Something wrong</></Layout>;
  }

  return (
    <Layout pageTitle={data.mdx.frontmatter.title || ""}>
      <>
        <p>{data.mdx.frontmatter?.date}</p>
        {/* TODO: add image */}
        <p>
          Photo Credit:{" "}
          <a href={data.mdx.frontmatter.image_credit_link || ""}>
            {data.mdx.frontmatter.image_credit_text}
          </a>
        </p>
        {children}
      </>
    </Layout>
  )
}

export const query = graphql`
  query MdxPage($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        image
        image_alt
        image_credit_link
        image_credit_text
      }
    }
  }
`


export const Head = ({ data }: PageProps<Queries.MdxPageQuery>) => {
  if (!data || !data.mdx || !data.mdx.frontmatter) {
    return <Seo title={""} />;
  }
  return <Seo title={data.mdx.frontmatter.title || ""} />
}

export default BlogPost