/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>

        <footer
          style={{
            marginTop: `2rem`,
            color: "white"
          }}
        >
          <div id="footer1">
            <h3>OUR PROCESS</h3>
            <ul>
              <li>Requirement</li>
              <li>Strategy</li>
              <li>Design</li>
              <li>Develop</li>
              <li>Test</li>
              <li>Deploy</li>
            </ul>
          </div>
          <div id="footer2">
            <div id="services">
              <h3>OUR SERVICES</h3>
              <ul>
                <li>website design</li>
                <li>website developement</li>
                <li>eCommerce design and develoement </li>
                <li>Mobile App design And developement</li>
                <li>Website maintainence</li>
              </ul>
            </div>
            <div id="solutions">
              <h3>OUR SOLUTIONS</h3>
              <ul>
                <li>Main Menu</li>
              </ul>
            </div>
            <div id="links">
              <h3>SOCIAL LINKS</h3>
              <i class="icon-facebook">Facebook</i>
            </div> 
            {/* <div id="button">
              <button type="button">ABOUT US</button>
              <button type="button">CONTACT US</button>
            </div>
            <div id="links">
              <h3>SOCIAL LINKS</h3>
              <i class="icon-facebook">Facebook</i>
              <i class="icon-linkedln">Linkedln</i>
              <i class="icon-instagram">Instagram</i>
            </div> */}

            {/* <div id="copyright">
              Copyright © {new Date().getFullYear()}, Built with
              {` `}
            </div> */}
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
