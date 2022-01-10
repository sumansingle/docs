import * as React from "react"
import { Link } from "gatsby"
import Container from "../ui/Container"

const Header = ({ siteTitle }) => (
  <header>
    <Container fluid className="flex justify-between items-center py-4">
      <Link to="/" className="text-red-500 font-bold text-4xl">
        {siteTitle}
      </Link>
      <nav>
        <ul className="flex items-center space-x-4">
          <li>
            <Link to="/" className="uppercase p-2 hover:bg-yellow-200">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about/" className="uppercase p-2 hover:bg-yellow-200">
              About
            </Link>
          </li>
          <li>
            <Link to="/" className="uppercase p-2 hover:bg-yellow-200">
              Services
            </Link>
          </li>
          <li>
            <Link to="/" className="uppercase p-2 hover:bg-yellow-200">
              Solutions
            </Link>
          </li>
          <li>
            <Link to="/" className="uppercase p-2 hover:bg-yellow-200">
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </Container>
  </header>
)

export default Header
