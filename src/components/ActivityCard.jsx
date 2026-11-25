import Reveal from './Reveal'

export default function ActivityCard({ id, title, short, image, images, imageAlt }) {
  const photos = images?.length ? images : image ? [image] : []

  return (
    <Reveal
      as="article"
      id={id}
      className={`activity-card${photos.length ? '' : ' activity-card--text'}`}
    >
      {photos.length ? (
        <div
          className={`activity-card__media${photos.length > 1 ? ' activity-card__media--pair' : ''}`}
        >
          {photos.map((src) => (
            <img key={src} src={src} alt={imageAlt || title} loading="lazy" />
          ))}
        </div>
      ) : null}
      <div className="activity-card__body">
        <h3>{title}</h3>
        <p>{short}</p>
      </div>
    </Reveal>
  )
}
