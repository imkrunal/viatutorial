import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import { Layout, Container, PostCard } from '../components'

const Index = ({ data, location }) => {
  const posts = data.allMdx.edges

  return (
    <Layout pathname={location.pathname}>
      <Container>
        <h1>Recent Tutorials</h1>
        <div
          css={css`
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-between;
          `}
        >
          {posts.map(({ node }) => (
            <PostCard key={node.id} post={node} />
          ))}
        </div>
      </Container>
    </Layout>
  )
}

export default Index

Index.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.object.isRequired,
  }).isRequired,
  location: PropTypes.object.isRequired,
}

export const pageQuery = graphql`
  query IndexQuery {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { released: { eq: true } } }
      limit: 6
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            description
            tags
          }
        }
      }
    }
  }
`
