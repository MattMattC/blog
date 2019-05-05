import React from "react"
import { graphql } from 'gatsby'

const HomePage = ({ data }) => {

    return <StaticQuery
        query={graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        description
      }
    }
  }
`} render={data =>
            <div>
                {data.site.siteMetadata.description}
            </div>}>
    </StaticQuery>
}

export default HomePage