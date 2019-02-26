import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({ entry, getAsset }) => {
  const entryBlurbs = entry.getIn(['data', 'intro', 'blurbs'])
  const blurbs = entryBlurbs ? entryBlurbs.toJS() : []

  return (
    <IndexPageTemplate
      imageHorizontal={entry.getIn(['data', 'imageHorizontal'])}
      imageVertical={entry.getIn(['data', 'imageVertical'])}
      title={entry.getIn(['data', 'title'])}
      firstLine={entry.getIn(['data', 'firstLine'])}
      recette1={entry.getIn(['data', 'recette1'])}
      recette2={entry.getIn(['data', 'recette2'])}
      recette3={entry.getIn(['data', 'recette3'])}
      story1={entry.getIn(['data', 'story1'])}
      story2={entry.getIn(['data', 'story2'])}
      footnote={entry.getIn(['data', 'footnote'])}
      heading={entry.getIn(['data', 'heading'])}
      subheading = {entry.getIn(['data', 'subheading'])}
      description={entry.getIn(['data', 'description'])}
      intro={{ blurbs }}
      main={{
        heading: entry.getIn(['data', 'main', 'heading']),
        description: entry.getIn(['data', 'main', 'description']),
        mainpitch: {
          title: entry.getIn(['data','mainpitch', 'title']),
          description: entry.getIn(['data','mainpitch', 'description'])
        },
        image1: {
          image: getAsset(entry.getIn(['data', 'main', 'image1', 'image'])),
          alt: entry.getIn(['data', 'main', 'image1', 'alt']),
        },
        image2: {
          image: getAsset(entry.getIn(['data', 'main', 'image2', 'image'])),
          alt: entry.getIn(['data', 'main', 'image2', 'alt']),
        },
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
