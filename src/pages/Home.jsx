import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import ActivityCard from '../components/ActivityCard'
import CTASection from '../components/CTASection'
import SEO from '../components/SEO'
import Reveal from '../components/Reveal'
import { activities, homeContent, workingAreas } from '../data/websiteContent'

export default function Home() {
  const {
    seo,
    hero,
    aboutPreview,
    mission,
    activitiesIntro,
    cta,
    shelterHighlight,
    workingAreas: workingIntro,
  } = homeContent

  return (
    <>
      <SEO title={seo.title} description={seo.description} />

      <Hero
        variant="home"
        eyebrow={hero.eyebrow}
        highlight={hero.highlight}
        rest={hero.rest}
        description={hero.description}
        image={hero.image}
        imageAlt={hero.imageAlt}
        primaryCta={hero.primaryCta}
      />

      <section className="section section--soft" id="shelter">
        <div className="container grid-2">
          <Reveal className="rounded-media">
            <img src={shelterHighlight.image} alt={shelterHighlight.imageAlt} loading="lazy" />
          </Reveal>
          <Reveal className="split-block__copy">
            <p className="eyebrow eyebrow--left">{shelterHighlight.eyebrow}</p>
            <h2>{shelterHighlight.title}</h2>
            <p>{shelterHighlight.description}</p>
            <Link to={shelterHighlight.path} className="btn btn--primary">
              {shelterHighlight.button}
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section section--white" id="about">
        <div className="container">
          <Reveal>
            <p className="eyebrow">{aboutPreview.eyebrow}</p>
            <h2 className="section-title">{aboutPreview.title}</h2>
            <p className="section-lead">{aboutPreview.body}</p>
            <div className="btn-group" style={{ justifyContent: 'center' }}>
              <Link to={aboutPreview.path} className="btn btn--primary">
                {aboutPreview.button}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--mint" id="mission">
        <div className="container grid-2">
          <Reveal className="split-block__copy">
            <p className="eyebrow eyebrow--left">{mission.eyebrow}</p>
            <h2>{mission.title}</h2>
            <p>{mission.intro}</p>
            <div className="mission-boxes">
              <div className="mission-box">
                <h3>Our Mission</h3>
                <p>{mission.mission}</p>
              </div>
              <div className="mission-box">
                <h3>Our Vision</h3>
                <p>{mission.vision}</p>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="rounded-media">
              <img src={mission.image} alt={mission.imageAlt} loading="lazy" />
            </div>
            <p className="image-caption">{mission.imageCaption}</p>
          </Reveal>
        </div>
      </section>

      <section className="section section--white" id="activities">
        <div className="container">
          <Reveal>
            <p className="eyebrow">{activitiesIntro.eyebrow}</p>
            <h2 className="section-title">{activitiesIntro.title}</h2>
            <p className="section-lead">{activitiesIntro.description}</p>
          </Reveal>
          <div className="activity-grid">
            {activities.map((item) => (
              <ActivityCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>

      <CTASection {...cta} />

      <section className="section section--soft" id="working-areas">
        <div className="container">
          <Reveal>
            <p className="eyebrow">{workingIntro.eyebrow}</p>
            <h2 className="section-title">{workingIntro.title}</h2>
          </Reveal>
          <div className="grid-3">
            {workingAreas.map((item) => (
              <ActivityCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
