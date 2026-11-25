import { Link } from 'react-router-dom'
import { footerContent, siteConfig } from '../data/websiteContent'

export default function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-brand__name">{siteConfig.name}</div>
            <p>{footerContent.blurb}</p>
          </div>

          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul>
              {footerContent.quickLinks.map((item) => (
                <li key={item.path + item.label}>
                  <Link to={item.path}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h3>Services</h3>
            <ul>
              {footerContent.services.map((item) => (
                <li key={item.path + item.label}>
                  <Link to={item.path}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h3>Registered Office</h3>
            <address className="footer-address">
              {siteConfig.contact.addressLines.map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
            </address>
          </div>
        </div>

        <div className="footer-bottom">
          <p>{siteConfig.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
