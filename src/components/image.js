import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"
/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Image = ({ src }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "me.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fixed(width: 370, height: 370) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return <Img fixed={data.file.childImageSharp.fixed} />
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
}

export default Image
