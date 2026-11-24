import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Reveal from './Reveal'

export default function ActivityCard({ title, short, image, imageAlt, path }) {
  return (
    <Reveal as="article" className="activity-card">
      <div className="activity-card__media">
        <img src={image} alt={imageAlt || title} loading="lazy" />
      </div>
      <div className="activity-card__body">
        <h3>{title}</h3>
        <p>{short}</p>
        <Link to={path} className="activity-card__link">
          Learn More <ArrowRight size={16} />
        </Link>
      </div>
    </Reveal>
  )
}
