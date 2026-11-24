import { Link } from 'react-router-dom'
import Reveal from './Reveal'

export default function CTASection({ title, description, primary, secondary }) {
  return (
    <section className="section">
      <div className="container">
        <Reveal className="cta-band">
          <h2>{title}</h2>
          <p>{description}</p>
          <div className="btn-group">
            {primary ? (
              <Link to={primary.path} className="btn btn--white">
                {primary.label}
              </Link>
            ) : null}
            {secondary ? (
              <Link to={secondary.path} className="btn btn--ghost">
                {secondary.label}
              </Link>
            ) : null}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
