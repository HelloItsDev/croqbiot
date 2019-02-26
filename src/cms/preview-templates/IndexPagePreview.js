import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({ entry, getAsset }) => {
  const entryBlurbs = entry.getIn(['data', 'intro', 'blurbs'])
  const blurbs = entryBlurbs ? entryBlurbs.toJS() : []

  return (
    <IndexPageTemplate
      header={{
        firstLine: entry.getIn(['data', 'header', 'firstLine']),
        title: entry.getIn(['data', 'header', 'title']),
        recette1: entry.getIn(['data', 'header', 'recette1']),
        recette2: entry.getIn(['data', 'header', 'recette2']),
        recette3: entry.getIn(['data', 'header', 'recette3'])
      }}
      story={{
        story1: entry.getIn(['data', 'story', 'story1']),
        story2: entry.getIn(['data', 'story', 'story2']),
        cta: entry.getIn(['data', 'story', 'cta']),
        footnote: entry.getIn(['data', 'story', 'footnote']),
        imageHorizontal: {img: getAsset(entry.getIn(['data', 'story', 'imageHorizontal'])),alt: entry.getIn(['data', 'story', 'imageAlt'])},
        imageVertical: {img: getAsset(entry.getIn(['data', 'story', 'imageVertical'])),alt: entry.getIn(['data', 'story', 'imageAlt'])},
      }}
      findashop={{
        heading: entry.getIn(['data', 'findashop', 'heading']),
        subheading: entry.getIn(['data', 'findashop', 'subheading']),
        description: entry.getIn(['data', 'findashop', 'description']),
        cta: entry.getIn(['data', 'findashop', 'cta']),
        image: {img: getAsset(entry.getIn(['data', 'findashop', 'image'])),  alt: entry.getIn(['data', 'findashop', 'imageAlt'])},
        footer: entry.getIn(['data', 'findashop', 'footer'])
      }}
      product={{
        image: {img: getAsset(entry.getIn(['data', 'product', 'image'])),  alt: entry.getIn(['data', 'product', 'imageAlt'])},
        title: entry.getIn(['data', 'product', 'title']),
        subTitle: entry.getIn(['data', 'product', 'subTitle']),
        status: entry.getIn(['data', 'product', 'status']),
        description: entry.getIn(['data', 'product', 'description']),
        message: entry.getIn(['data', 'product', 'message'])
      }}
      banner={{
        image: {img: getAsset(entry.getIn(['data', 'banner', 'image'])), alt: entry.getIn(['data', 'banner', 'imageAlt'])},
        mobileImage: {img: getAsset(entry.getIn(['data', 'banner', 'mobileImage'])), alt: entry.getIn(['data', 'banner', 'imageAlt'])},
      }}
      testimonial={{
        quote: entry.getIn(['data', 'testimonial', 'quote']),
        from: entry.getIn(['data', 'testimonial', 'from'])
      }}
      contact={{
        heading: entry.getIn(['data', 'contact', 'heading']),
        subheading: entry.getIn(['data', 'contact', 'subheading']),
        mail: entry.getIn(['data', 'contact', 'mail']),
        instagram: entry.getIn(['data', 'contact', 'instagram']),
        facebook: entry.getIn(['data', 'contact', 'facebook'])
      }}
    />
  )
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default IndexPagePreview
