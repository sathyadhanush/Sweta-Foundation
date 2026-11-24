import { Link } from 'react-router-dom'

export default function Hero({
  variant = 'page',
  eyebrow,
  highlight,
  rest,
  description,
  image,
  imageAlt,
  primaryCta,
  secondaryCta,
}) {
  const isHome = variant === 'home'

  return (
    <section className={isHome ? 'home-hero' : 'page-hero'}>
      <div className="container">
        <div className={isHome ? 'home-hero__content' : 'page-hero__content'}>
          {eyebrow ? <p className="home-hero__eyebrow">{eyebrow}</p> : null}
          <h1>
            <span className="accent">{highlight}</span>
            {rest ? <> {rest}</> : null}
          </h1>
          {description ? <p className={isHome ? 'home-hero__desc' : undefined}>{description}</p> : null}
          {(primaryCta || secondaryCta) && (
            <div className="btn-group">
              {primaryCta ? (
                <Link to={primaryCta.path} className="btn btn--primary">
                  {primaryCta.label}
                </Link>
              ) : null}
              {secondaryCta ? (
                <Link to={secondaryCta.path} className="btn btn--outline">
                  {secondaryCta.label}
                </Link>
              ) : null}
            </div>
          )}
        </div>

        {image ? (
          <div className={isHome ? 'home-hero__media' : 'page-hero__media'}>
            <img src={image} alt={imageAlt || ''} loading={isHome ? 'eager' : 'lazy'} />
          </div>
        ) : null}
      </div>
    </section>
  )
}
