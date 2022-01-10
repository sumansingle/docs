import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <Seo title="Page two" />
    <StaticImage className="h-1/5	height: 20%"
        src="../images/clement-helardot-95YRwf6CNw8-unsplash (2).jpg"
        alt="A computer image"
      />
    
    <h1>MANAGE YOUR
BUSINESS
WITH US</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
