import React from 'react'
import PropTypes from 'prop-types'
import { StoryPageTemplate } from '../../templates/story-page'

const StoryPagePreview = ({ entry, getAsset, widgetFor }) => {
//  const entryBlurbs = entry.getIn(['data', 'intro', 'blurbs'])
//  const blurbs = entryBlurbs ? entryBlurbs.toJS() : []

  return (
    <StoryPageTemplate
    storyHeader={{
      title1: entry.getIn(['data', 'storyHeader', 'title1']),
      title2: entry.getIn(['data', 'storyHeader', 'title2']),
      banner: {
        actif: entry.getIn(['data', 'storyHeader', 'banner', 'actif']),
        image: {
          img: getAsset(entry.getIn(['data', 'storyHeader', 'banner', 'image', 'img'])),
          alt: entry.getIn(['data', 'banner', 'image','alt'])
        },
        mobileImage: {
          img: getAsset(entry.getIn(['data', 'storyHeader', 'banner', 'mobileImage','img'])),
          alt: entry.getIn(['data', 'banner', 'mobileImage', 'alt'])
        },
      }
    }}
    stories={{
      title: {
        val: entry.getIn(['data', 'stories', 'title', 'val']),
        actif: entry.getIn(['data', 'stories', 'title', 'actif']),
      },
      banner: {
        actif: entry.getIn(['data', 'stories', 'banner', 'actif']),
        image: {
          img: getAsset(entry.getIn(['data', 'stories', 'banner', 'image', 'img'])),
          alt: entry.getIn(['data', 'banner', 'image','alt'])
        },
        mobileImage: {
          img: getAsset(entry.getIn(['data', 'stories', 'banner', 'mobileImage','img'])),
          alt: entry.getIn(['data', 'banner', 'mobileImage', 'alt'])
        },
      },
      doubleImage : {
        actif: entry.getIn(['data', 'stories', 'doubleImage', 'actif']),
        imageHorizontal: {
          img: getAsset(entry.getIn(['data', 'stories', 'doubleImage', 'imageHorizontal','img'])),
          alt: entry.getIn(['data', 'stories', 'doubleImage', 'imageHorizontal','alt'])
        },
        imageVertical: {
          img: getAsset(entry.getIn(['data', 'stories', 'doubleImage', 'imageVertical','img'])),
          alt: entry.getIn(['data', 'stories', 'doubleImage','imageVertical','alt'])
        },
      },
      footnote : {
        val: entry.getIn(['data', 'stories', 'footnote', 'val']),
        actif: entry.getIn(['data', 'stories', 'footnote', 'actif']),
      },
      cta : {
        val: entry.getIn(['data', 'stories', 'cta', 'val']),
        actif: entry.getIn(['data', 'stories', 'cta', 'actif']),
        link: entry.getIn(['data', 'stories', 'cta', 'link']),
      },
      story: entry.getIn(['data', 'stories', 'story']),
      testimonial:{
        actif: entry.getIn(['data', 'stories','testimonial', 'actif']),
        quote: entry.getIn(['data', 'stories','testimonial', 'quote']),
        from: entry.getIn(['data', 'stories','testimonial', 'from'])
      }    
    }}
    />
  )
}

StoryPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
  widgetFor: PropTypes.func,
}

export default StoryPagePreview
