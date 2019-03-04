import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import { FakeImg } from '../components/FakeImg/FakeImg';

class BlogRoll extends React.Component {

  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    
    return (
      <div className="grid">
        <div className="col md-10 md-push-1 lg-push-1">
        {posts && (posts
            .map(({ node: post }) => (
              
              <Link className="article" to={post.fields.slug} key={post.id}>
                <FakeImg className="-three-x-two" 
                  indexable
                  alt={post.frontmatter.BlogImage.alt}
                  img={
                    !!post.frontmatter.BlogImage.img.childImageSharp
                    ? post.frontmatter.BlogImage.img.childImageSharp.fluid.src
                    : post.frontmatter.BlogImage.img
                    } />
                <div className="info">
                  <h2>{post.frontmatter.title}</h2>
                  <p className="description" >
                    {post.frontmatter.description}
                  </p>  
                  <p>            
                    <span className="subtitle is-size-5 is-block">{post.frontmatter.date}</span>
                    <span> &bull; </span>
                    <span className="subtitle is-size-5 is-block">{post.frontmatter.readingTime} de lecture.</span>
                  </p>
                                
                </div>
                
              </Link>
            )))}
            </div>
          </div>
    );
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
    query BlogRollQuery {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] },
        filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
      ) {
        edges {
          node {
            excerpt(pruneLength: 100)
            id
            fields {
              slug
            }
            frontmatter {
              title
              readingTime
              description
              BlogImage {
                img {
                  childImageSharp {
                    fluid(maxHeight: 200, quality: 80) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                alt
              }
              templateKey
              date(formatString: "DD MMMM, YYYY", locale: "fr")
            }
          }
        }
      }
    }
    `}
    render={(data, count) => (
      <BlogRoll data={data} count={count} />
    )}
  />
)
