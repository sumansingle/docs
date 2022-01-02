import * as React from "react"
import Container from "../ui/Container"

const Footer = () => {
  return (
    <footer>
      <div className="py-10">
        <Container fluid>
          <h3>OUR PROCESS</h3>
          <ul>
            <li>Requirement</li>
            <li>Strategy</li>
            <li>Design</li>
            <li>Develop</li>
            <li>Test</li>
            <li>Deploy</li>
          </ul>
        </Container>
      </div>
      <div className="bg-blue-900 text-white py-10">
        <Container fluid className="grid grid-cols-3 gap-6">
          <div className="space-y-4">
            <h3 className="font-bold">OUR SERVICES</h3>
            <ul>
              <li>website design</li>
              <li>website developement</li>
              <li>eCommerce design and develoement </li>
              <li>Mobile App design And developement</li>
              <li>Website maintainence</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-bold">OUR SOLUTIONS</h3>
            <ul>
              <li>Main Menu</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-bold">SOCIAL LINKS</h3>
            <i class="icon-facebook">Facebook</i>
          </div>
        </Container>
      </div>
    </footer>
  )
}

export default Footer
