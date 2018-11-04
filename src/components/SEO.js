import React from 'react'
import Helmet from 'react-helmet'

const defaultTitle = 'youlingual'
const defaultDescription =
  "Learn a new language from your social media with the power of machine learning and your friends' selfies."

const SEO = props => (
  <Helmet>
    <title>
      {props.title ? `${props.title} - ${defaultTitle}` : defaultTitle}
    </title>
    <meta
      name="description"
      content={props.description ? props.description : defaultDescription}
    />
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content={defaultTitle} />
    <meta
      property="og:title"
      content={props.title ? `${props.title} - ${defaultTitle}` : defaultTitle}
    />
    <meta
      property="og:description"
      content={props.description ? props.description : defaultDescription}
    />
  </Helmet>
)

export default SEO
