import { Link } from 'react-router-dom'
import Reveal from './Reveal'

export default function InitiativeCard({ title, description, button, path, image, imageAlt }) {
  return (
    <Reveal as="article" className="initiative-card">
      <div className="initiative-card__media">
        <img src={image} alt={imageAlt || title} loading="lazy" />
      </div>
      <div className="initiative-card__body">
        <h3>{title}</h3>
        <p>{description}</p>
        <Link to={path} className="btn btn--primary">
          {button}
        </Link>
      </div>
    </Reveal>
  )
}
