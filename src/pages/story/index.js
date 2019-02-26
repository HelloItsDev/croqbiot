import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    
  return (
      <Layout>
          <div className="main">
            <div className="grid">
                <h1 className="col -block md-push-1 lg-push-2 title" >
                  Voici notre histoire.<br />
                  <span className="salmon" >Une histoire de bidon! </span>
                </h1>
            </div>          
          </div>
      </Layout>
    )
  }
}
