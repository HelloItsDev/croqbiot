import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'

import { Section } from '../components/Section/Section';
import { Contact } from '../components/Contact/Contact';
import { Typewriter } from '../components/Typewriter/Typewriter';
import { Banner } from '../components/Banner/Banner';
import { FakeImg } from '../components/FakeImg/FakeImg';
import { Product } from '../components/Product/Product';

import img1 from '../img/img-1.jpg';
import bannerImg from '../img/banner.jpg';
import bannerMobileImg from '../img/banner-mobile.jpg';

export const IndexPageTemplate = ({
  firstLine,
  imageHorizontal,
  imageVertical,
  title,
  recette1,
  recette2,
  recette3,
  story1,
  story2,
  footnote,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
  main,
}) => (
    <div className="main">
    <Section>
    <div className="grid">
					<h1 className="col -block md-push-1 lg-push-2 title">
						{firstLine}
						<br />
						{title}
						<Typewriter
							className="title-desc"
							texts={[recette1, recette2, recette3]}
						/>
					</h1>
				</div>

				<div className="grid">
					<div className="col md-7 lg-5 md-push-1 lg-push-2 lg-push-3">
						<p className="measure">
							{story1}
						</p>
						<p className="measure">
              {story2}
						</p>

						<p>
							<Link to="/story" className="button">
								Lire notre histoire
							</Link>
						</p>
					</div>
				
					<div className="col md-3 lg-2">
						<p className="small faded footnote -yellow" data-id="&#9679;">
							{footnote}
						</p>
					</div>
				</div>

				<div className="grid">
					<div className="gallery fake-img-group">
						<div className="col fluid md-7 md-push-1 lg-6 lg-push-2 fake-img-wrapper">
              <FakeImg className="-three-x-two" 
              img={
                !!imageHorizontal.childImageSharp
                ? imageHorizontal.childImageSharp.fluid.src
                : imageHorizontal
                } />
						</div>

						<div className="col fluid md-3 fake-img-wrapper">
							<FakeImg className="-two-x-three" img={
                !!imageVertical.childImageSharp
                ? imageVertical.childImageSharp.fluid.src
                : imageVertical
                } />
						</div>
					</div>
				</div>
			</Section>

      <Section className="-salmon">
				<div className="grid">
					<h1 className="col md-push-1 lg-push-2">Eat it</h1>
				</div>

				<div className="grid">
					<div className="col md-7 lg-5 md-push-1 lg-push-3">
						<h3 className="measure-wider">Find a shop</h3>
						<p className="measure-wider">
							Buy our frozen bake-at-home packs from a few shops around London.
						</p>
						<p className="measure-wider">
							<Link to="/stockists" className="button">
								See stockists
							</Link>
						</p>
					</div>
				</div>

				<div className="grid">
					<div className="col fluid md-7 md-push-1 lg-6 lg-push-2">
						<FakeImg className="-three-x-two" img={img1} />
					</div>
				</div>

				<div className="grid">
					<div className="col md-7 lg-5 md-push-1 lg-push-2">
						<h2 className="h1">It’s pronounced pown-deh-kay-zho.</h2>
					</div>
				</div>
			</Section>

      <Product
				soldout
			/>

      <Banner img={bannerImg} mobileImg={bannerMobileImg} />

      <Section className="-salmon testimonial">
        <div className="grid">
          <blockquote className="col md-9 md-push-1 lg-push-2">
            <h3 className="h1">
              A crunchy outside giving way to a cloud-like interior. Sounds ace, right?
              Right.
            </h3>
            <p>Tom Howells – TimeOut London</p>
          </blockquote>
        </div>
      </Section>

      <Section>
        <Contact />
      </Section>
  </div>
)

IndexPageTemplate.propTypes = {
  firstLine: PropTypes.string,
  imageHorizontal: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  imageVertical: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  recette1: PropTypes.string,
  recette2: PropTypes.string,
  recette3: PropTypes.string,
  story1: PropTypes.string,
  story2: PropTypes.string,
  footnote: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        title={frontmatter.title}
        firstLine={frontmatter.firstLine}
        recette1={frontmatter.recette1}
        recette2={frontmatter.recette2}
        recette3={frontmatter.recette3}
        story1={frontmatter.story1}
        story2={frontmatter.story2}
        footnote={frontmatter.footnote}
        imageHorizontal={frontmatter.imageHorizontal}
        imageVertical={frontmatter.imageVertical}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
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
        title
        firstLine
        recette1
        recette2
        recette3
        story1
        story2
        footnote
        image {
          childImageSharp {
            fluid(maxHeight: 420, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        imageHorizontal {
          childImageSharp {
            fluid(maxHeight: 420, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        imageVertical {
          childImageSharp {
            fluid(maxHeight: 420, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
