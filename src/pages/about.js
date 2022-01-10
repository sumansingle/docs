import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <Seo title="Page two"/>
    <body>
    <div>
    <StaticImage className="w-auto h-64 "

        src="../images/clement-helardot-95YRwf6CNw8-unsplash (2).jpg"
        alt="A computer image"
        />
    
    <div className="text-white text-2xl"><h1 className="font-bold text-right right-3.5 absolute top-20 ">MANAGE YOUR<br></br>
BUSINESS<br></br>
WITH US</h1></div>
<div className="text-2xl text-center ">ABOUT</div>
<div className="text-1xl text-center mx-8 ml-4 mr-4">BITDECODERS is the team name of WELLSOUL PRIVATE LIMITED.
   This team works in the field of Programming Code.
    Currently, we are dealing in WEBSITE DESIGN & DEVELOPMENT,
     e-Commerce DESIGN & DEVELOPMENT, and MOBILE APP DESIGN & DEVELOPMENT.
      We specialize in Amazon Web Services, Google Cloud & Microsoft Azure,
       and others. We give your business or portfolio a powerful website and 
       online presence which not only caters to your specific business needs but
        helps you build better clientele and improves your visibility online.
         Our team works in complete coordination and cooperation to accomplish
          every project well on time without compromising on the quality front.</div>
    <Link to="/">Go back to the homepage</Link>
    </div></body>
  </Layout>
)

export default SecondPage
