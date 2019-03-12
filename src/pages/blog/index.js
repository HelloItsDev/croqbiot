import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    
  return (
      <Layout>
          <div className="main blog-roll">
            <div className="grid header">
                <h1 className="col -block md-push-1 lg-push-2 title" >
                  Nos derniers articles <br />
                  <span className="salmon" >À dévorer. </span>
                </h1>
            </div>
            <BlogRoll />              
          </div>
      </Layout>
    )
  }
}
