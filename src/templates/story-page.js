import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import {Aux} from '../components/utility'
import Layout from '../components/Layout'
import { Section } from '../components/Section/Section';
import { Contact } from '../components/Contact/Contact';
import { Banner } from '../components/Banner/Banner';
import { FakeImg } from '../components/FakeImg/FakeImg';




export const StoryPageTemplate = ({
  storyHeader,
  stories,
}) => (
    <div className="main">
        <div className="grid">
          <h1 className="col -block md-push-1 lg-push-2 title">
            {storyHeader.title1}
            <br />
            <span className="salmon" >{storyHeader.title2}</span>            
          </h1>
        </div>
        {storyHeader.banner && storyHeader.banner.actif && (
          <Banner img={
            !!storyHeader.banner.image.img.childImageSharp
            ? storyHeader.banner.image.img.childImageSharp.fluid.src
            : storyHeader.banner.image.img
            } 
            mobileImg={
              !!storyHeader.banner.mobileImage.img.childImageSharp
              ? storyHeader.banner.mobileImage.img.childImageSharp.fluid.src
              : storyHeader.banner.mobileImage.img
              } />
        )}

      <Section>
        {stories.map((story) => (
          <Aux>
            <div className="grid">
            <div className="col md-7 lg-5 md-push-1 lg-push-3" >
              {story.title && story.title.actif && (
                <h2>{story.title.val}</h2>
              )}
            </div>
            <div className="col md-7 lg-5 md-push-1 lg-push-3" >
              <p className="measure" dangerouslySetInnerHTML={{ __html: story.story }}></p>
              {story.cta.actif && (
                <p>
                    <Link to={story.cta.link} className="button">{story.cta.val}</Link>
                </p>
                
              )}
            </div>
            {story.footnote && story.footnote.actif && (
              <div className="col md-3 lg-2" >
                <p className="small faded footnote -yellow" data-id="&#9679;">{story.footnote.val}</p>                
              </div>
            )}
          </div>
            {story.doubleImage && story.doubleImage.actif && (
              <div className="grid">
              <div className="gallery fake-img-group">
                <div className="col fluid md-7 md-push-1 lg-6 lg-push-2 fake-img-wrapper">
                  <FakeImg className="-three-x-two" 
                  img={
                    !!story.doubleImage.imageHorizontal.img.childImageSharp
                    ? story.doubleImage.imageHorizontal.img.childImageSharp.fluid.src
                    : story.doubleImage.imageHorizontal.img
                    } />
                </div>
    
                <div className="col fluid md-3 fake-img-wrapper">
                  <FakeImg className="-two-x-three" img={
                    !!story.doubleImage.imageVertical.img.childImageSharp
                    ? story.doubleImage.imageVertical.img.childImageSharp.fluid.src
                    : story.doubleImage.imageVertical.img
                    } />
                </div>
              </div>
            </div>
            )}
            {story.banner && story.banner.actif && (
              <Banner img={
                !!story.banner.image.img.childImageSharp
                ? story.banner.image.img.childImageSharp.fluid.src
                : story.banner.image.img
                } 
                mobileImg={
                  !!story.banner.mobileImage.img.childImageSharp
                  ? story.banner.mobileImage.img.childImageSharp.fluid.src
                  : story.banner.mobileImage.img
                  } />
            )}
            {story.testimonial && story.testimonial.actif && (
              <Section className="-salmon testimonial my-10">
                <div className="grid">
                  <blockquote className="col md-9 md-push-1 lg-push-2">
                    <h3 className="h1">
                      {story.testimonial.quote}
                    </h3>
                    <p>{story.testimonial.from}</p>
                  </blockquote>
                </div>
             </Section>
            )}
          </Aux>        
        ))}
      </Section>

      <Section>
        <Contact/>
      </Section>

  </div>
)

StoryPageTemplate.propTypes = {
  storyHeader: PropTypes.object,
  stories: PropTypes.object
}

const StoryPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <StoryPageTemplate
        storyHeader={frontmatter.storyHeader}
        stories={frontmatter.stories}
      />
    </Layout>
  )
}

StoryPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default StoryPage

export const pageQuery = graphql`
query StoryPageTemplate {
  markdownRemark(frontmatter: {templateKey: {eq: "story-page"}}) {
      frontmatter {
        storyHeader {
          title1
          title2
          banner {
            actif
            image {
              img {
                childImageSharp {
                  fluid(maxHeight: 800, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              } 
              alt
            }
            mobileImage {
              img {
                childImageSharp {
                  fluid(maxHeight: 490, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              } 
              alt            
            }
          }
        }
        stories {
          title{
            val
            actif
          }
          story
          footnote{
            val
            actif
          }
          cta{
            val
            link
            actif
          }
          banner {
            actif
            image {
              img {
                childImageSharp {
                  fluid(maxHeight: 800, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              } 
              alt
            }
            mobileImage {
              img {
                childImageSharp {
                  fluid(maxHeight: 490, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              } 
              alt            
            }
          }
          doubleImage {
            actif
            imageHorizontal {
              img {
                childImageSharp {
                  fluid(maxHeight: 420, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              alt            
            }
            imageVertical {
              img {
                childImageSharp {
                  fluid(maxHeight: 420, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              alt
            }
          }
          testimonial {
            actif
            quote
            from
          }   
        }      
      }
    }    
  }
`
