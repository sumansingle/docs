import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/Layout"
import Seo from "../components/seo"
import Container from "../components/ui/Container"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Container fluid>
      <h1>Hello people</h1>
      <p>Welcome to .</p>
      <p>Now go build something great.</p>
      <StaticImage
        src="../images/gatsby-astronaut.png"
        alt="A Gatsby astronaut"
      />
      <p>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
        <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
        <Link to="/using-dsg">Go to "Using DSG"</Link>
      </p>
    </Container>
  </Layout>
)

export default IndexPage
