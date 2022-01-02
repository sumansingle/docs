import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="carousel">
      <StaticImage 
      src="../images/unsplash_m_HRfLhgABo.png"
      width={1500}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="web design and developement"
      style={{ marginBottom: `1rem` }}
      
      >

      </StaticImage>
    </div>

    <div id="about">
      <h3>
        Want to give your <span> BUSINESS </span> an <span> ONLINE PRESENCE </span>  
      </h3>
      <h6>
        Custom Website Design & Developement Solutions for your Business
      </h6>
      <p>
      BITDECODERS is the team name of <strong> WELLSOUL PRIVATE LIMITED</strong>. This team works in the field of Programming Code.
Currently, we deal in <strong> WEBSITE DESIGN & DEVELOPMENT </strong>, <strong> eCommerce DESIGN & DEVELOPMENT and MOBILE APP
DESIGN & DEVELOPMENT</strong>. We give your business or portfolio a powerful website and online presence which not only
caters to your specific business needs but helps you build better clientele and improves your visibility online.
      </p>
      <button className="btn">
      <Link to="/about/">About Us</Link>
      </button>
    </div>

    <div id="our-services">
      <h2>
        OUR <span> SERVICES </span>
      </h2>
      <div id="block">
      <div className="blocks">
        <h4>
          <u>RESPONSIVE WEBSITES</u>
        </h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio perferendis rerum nemo, rem id iusto dignissimos numquam perspiciatis illum libero iure necessitatibus natus repudiandae ipsum ea est reiciendis nam molestiae fugit nesciunt architecto sapiente! Delectus beatae aliquam cumque laborum eos tenetur blanditiis, perferendis nobis quo.

        </p>
        <div id="products">

        </div>
        <button className="btn">Know More</button>
      </div>
      <div className="blocks">
        <h4>
          <u>WEBSITE DEVELOPEMENT</u>
        </h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio perferendis rerum nemo, rem id iusto dignissimos numquam perspiciatis illum libero iure necessitatibus natus repudiandae ipsum ea est reiciendis nam molestiae fugit nesciunt architecto sapiente! Delectus beatae aliquam cumque laborum eos tenetur blanditiis, perferendis nobis quo.

        </p>
        <div id="products">

        </div>
        <button className="btn">Know More</button>
      </div>
      <div className="blocks">
        <h4>
          <u>eCOMMERCE DESIGN AND DEVELOPEMENT</u>
        </h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio perferendis rerum nemo, rem id iusto dignissimos numquam perspiciatis illum libero iure necessitatibus natus repudiandae ipsum ea est reiciendis nam molestiae fugit nesciunt architecto sapiente! Delectus beatae aliquam cumque laborum eos tenetur blanditiis, perferendis nobis quo.

        </p>
        <div id="products">

        </div>
        <button className="btn">Know More</button>
      </div>
      <div className="blocks">
        <h4>
          <u>MOBILE APP DESIGN AND DEVELOPMENT</u>
        </h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio perferendis rerum nemo, rem id iusto dignissimos numquam perspiciatis illum libero iure necessitatibus natus repudiandae ipsum ea est reiciendis nam molestiae fugit nesciunt architecto sapiente! Delectus beatae aliquam cumque laborum eos tenetur blanditiis, perferendis nobis quo.

        </p>
        <div id="products">

        </div>
        <button className="btn">Know More</button>
      </div>
      </div>
    </div>



    {/* <h1>Hello people</h1>
    <p>Welcome to .</p>
    <p>Now go build something great.</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/about/">Go to About page </Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
      <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
      <Link to="/using-dsg">Go to "Using DSG"</Link>
    </p> */}
  </Layout>
)

export default IndexPage
