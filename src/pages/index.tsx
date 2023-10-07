import * as React from 'react'
import { Link, graphql, PageProps } from 'gatsby'
import Layout from '../components/Layouts'
import Seo from '../components/Seo'

const BlogPage = ({ data }: PageProps<Queries.blogIndexPageQuery>) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <>
        {
          data.allMdx.nodes.map(node => node.frontmatter ? (
            <article key={node.id}>
              <h2>
                <Link to={`/${node.frontmatter.slug}`}>
                  {node.frontmatter.title}
                </Link>
              </h2>
              <p>Posted: {node.frontmatter.date}</p>
            </article>
          ): (<article></article>))
        }
      </>
    </Layout>
  )
}

export const query = graphql`
  query blogIndexPage {
    allMdx(sort: { frontmatter: { date: DESC }}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
      }
    }
  }
`

export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage