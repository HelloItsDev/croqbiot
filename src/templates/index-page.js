import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import { Section } from '../components/Section/Section';
import { Contact } from '../components/Contact/Contact';
import { Typewriter } from '../components/Typewriter/Typewriter';
import { Banner } from '../components/Banner/Banner';
import { FakeImg } from '../components/FakeImg/FakeImg';
import Product  from '../components/Product/Product';




export const IndexPageTemplate = ({
  header,
  story,
  findashop,
  product,
  banner,
  testimonial,
  contact
}) => (
    <div className="main">
    <Section>
    <div className="grid">
					<h1 className="col -block md-push-1 lg-push-2 title">
						{header.firstLine}
						<br />
						{header.title}
						<Typewriter
							className="title-desc"
							texts={[header.recette1, header.recette2, header.recette3]}
						/>
					</h1>
				</div>

				<div className="grid">
					<div className="col md-7 lg-5 md-push-1 lg-push-2 lg-push-3">
						<p className="measure">
							{story.story1}
						</p>
						<p className="measure">
              {story.story2}
						</p>

						<p>
							<Link to="/story" className="button">
								{story.cta}
							</Link>
						</p>
					</div>
				
					<div className="col md-3 lg-2">
						<p className="small faded footnote -yellow" data-id="&#9679;">
							{story.footnote}
						</p>
					</div>
				</div>

				<div className="grid">
					<div className="gallery fake-img-group">
						<div className="col fluid md-7 md-push-1 lg-6 lg-push-2 fake-img-wrapper">
              <FakeImg className="-three-x-two" 
              img={
                !!story.imageHorizontal.img.childImageSharp
                ? story.imageHorizontal.img.childImageSharp.fluid.src
                : story.imageHorizontal.img
                } />
						</div>

						<div className="col fluid md-3 fake-img-wrapper">
							<FakeImg className="-two-x-three" img={
                !!story.imageVertical.img.childImageSharp
                ? story.imageVertical.img.childImageSharp.fluid.src
                : story.imageVertical.img
                } />
						</div>
					</div>
				</div>
			</Section>

      <Section className="-salmon">
				<div className="grid">
					<h1 className="col md-push-1 lg-push-2">{findashop.heading}</h1>
				</div>

				<div className="grid">
					<div className="col md-7 lg-5 md-push-1 lg-push-3">
						<h3 className="measure-wider">{findashop.subheading}</h3>
						<p className="measure-wider">
							{findashop.description}
						</p>
						<p className="measure-wider">
							<Link to="/stockists" className="button">
								{findashop.cta}
							</Link>
						</p>
					</div>
				</div>

				<div className="grid">
					<div className="col fluid md-7 md-push-1 lg-6 lg-push-2">
						<FakeImg className="-three-x-two" img={
                !!findashop.image.img.childImageSharp
                ? findashop.image.img.childImageSharp.fluid.src
                : findashop.image.img
                } />
					</div>
				</div>

				<div className="grid">
					<div className="col md-7 lg-5 md-push-1 lg-push-2">
						<h2 className="h1"> {findashop.footer} </h2>
					</div>
				</div>
			</Section>

      <Product
        soldout
        {...product}
			/>

      <Banner img={
                !!banner.image.img.childImageSharp
                ? banner.image.img.childImageSharp.fluid.src
                : banner.image.img
                } 
                mobileImg={
                  !!banner.mobileImage.img.childImageSharp
                  ? banner.mobileImage.img.childImageSharp.fluid.src
                  : banner.mobileImage.img
                  } />

      <Section className="-salmon testimonial">
        <div className="grid">
          <blockquote className="col md-9 md-push-1 lg-push-2">
            <h3 className="h1">
              {testimonial.quote}
            </h3>
            <p>{testimonial.from}</p>
          </blockquote>
        </div>
      </Section>

      <Section>
        <Contact {...contact} />
      </Section>
  </div>
)

IndexPageTemplate.propTypes = {
  header: PropTypes.object,
  story: PropTypes.object,
  findashop: PropTypes.object,
  product: PropTypes.object,
  banner: PropTypes.object,
  testimonial: PropTypes.object,
  contact: PropTypes.object
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        header={frontmatter.header}
        story={frontmatter.story}
        findashop={frontmatter.findashop}
        product={frontmatter.product}
        banner={frontmatter.banner}
        testimonial={frontmatter.testimonial}
        contact={frontmatter.contact}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
query IndexPageTemplate {
  markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
      frontmatter {
        header {
          title
          firstLine
          recette1
          recette2
          recette3
        }
        story {
          story1
          story2
          footnote
          cta
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
        findashop {
          heading
          subheading
          description
          cta
          image {
            img {
              childImageSharp {
                fluid(maxWidth: 625, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            } 
            alt
            
          }
          footer
        }
        product {
          image {
            img {
              childImageSharp {
                fluid(maxHeight: 500, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            } 
            alt            
          }
          title
          subTitle
          status
          description
          message
        }
        banner {
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
        testimonial {
          quote,
          from
        }
        contact {
          heading
          subheading
          mail
          instagram
          facebook
        }        
      }
    }
  }
`
