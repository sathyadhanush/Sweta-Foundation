import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { UserRound } from 'lucide-react'
import Hero from '../components/Hero'
import CTASection from '../components/CTASection'
import SEO from '../components/SEO'
import Reveal from '../components/Reveal'
import { aboutPage, homeContent, siteConfig } from '../data/websiteContent'

export default function About() {
  const { seo, hero, establishment, foundersTitle, missionTitle, visionTitle, commitment } =
    aboutPage
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [location])

  return (
    <>
      <SEO title={seo.title} description={seo.description} />
      <Hero
        highlight={hero.highlight}
        rest={hero.rest}
        description={hero.description}
        image={hero.image}
        imageAlt={hero.imageAlt}
      />

      <section className="section section--white">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Who We Are</p>
            <h2 className="section-title">{establishment.title}</h2>
            <p className="section-lead">{establishment.body}</p>
          </Reveal>
        </div>
      </section>

      <section className="section section--mint">
        <div className="container">
          <Reveal>
            <p className="eyebrow">{foundersTitle}</p>
            <h2 className="section-title">
              Guided by <span className="accent">Compassion</span>
            </h2>
          </Reveal>
          <div className="founder-list" style={{ maxWidth: 720, marginInline: 'auto' }}>
            {siteConfig.founders.map((name) => (
              <Reveal key={name} className="founder-card">
                <span className="founder-card__icon" aria-hidden="true">
                  <UserRound size={22} />
                </span>
                <div>
                  <strong>{name}</strong>
                  <span>Founder</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--white" id="mission">
        <div className="container grid-2">
          <Reveal className="split-block__copy">
            <p className="eyebrow eyebrow--left">Purpose</p>
            <h2>Dedicated to animal welfare &amp; education for all communities</h2>
            <p>{homeContent.mission.intro}</p>
            <div className="mission-boxes">
              <div className="mission-box">
                <h3>{missionTitle}</h3>
                <p>{homeContent.mission.mission}</p>
              </div>
              <div className="mission-box">
                <h3>{visionTitle}</h3>
                <p>{homeContent.mission.vision}</p>
              </div>
            </div>
          </Reveal>
          <Reveal className="rounded-media">
            <img
              src={homeContent.mission.image}
              alt={homeContent.mission.imageAlt}
              loading="lazy"
            />
          </Reveal>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Communities</p>
            <h2 className="section-title">{commitment.title}</h2>
            <p className="section-lead">{commitment.body}</p>
          </Reveal>
        </div>
      </section>

      <CTASection {...homeContent.cta} />
    </>
  )
}
