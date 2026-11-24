import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import InitiativeCard from '../components/InitiativeCard'
import ActivityCard from '../components/ActivityCard'
import CTASection from '../components/CTASection'
import SEO from '../components/SEO'
import Reveal from '../components/Reveal'
import { activities, homeContent } from '../data/websiteContent'

export default function Home() {
  const { seo, hero, initiatives, aboutPreview, mission, activitiesIntro, cta, shelterHighlight } =
    homeContent

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
        secondaryCta={hero.secondaryCta}
      />

      <section className="section section--white">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Our Initiatives</p>
            <h2 className="section-title">
              How <span className="accent">We Care</span> Together
            </h2>
            <p className="section-lead">
              Three focused pillars guide our work across animal welfare, protection, and education.
            </p>
          </Reveal>
          <div className="grid-3">
            {initiatives.map((item) => (
              <InitiativeCard key={item.path} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--mint">
        <div className="container grid-2">
          <Reveal className="rounded-media">
            <img src={aboutPreview.image} alt={aboutPreview.imageAlt} loading="lazy" />
          </Reveal>
          <Reveal className="split-block__copy">
            <p className="eyebrow eyebrow--left">{aboutPreview.eyebrow}</p>
            <h2>{aboutPreview.title}</h2>
            <p>{aboutPreview.body}</p>
            <Link to={aboutPreview.path} className="btn btn--primary">
              {aboutPreview.button}
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section section--white" id="mission">
        <div className="container grid-2">
          <Reveal className="split-block__copy">
            <p className="eyebrow eyebrow--left">{mission.eyebrow}</p>
            <h2>{mission.title}</h2>
            <p>{mission.intro}</p>
            <div className="mission-boxes">
              <div className="mission-box">
                <h3>Mission</h3>
                <p>{mission.mission}</p>
              </div>
              <div className="mission-box">
                <h3>Vision</h3>
                <p>{mission.vision}</p>
              </div>
            </div>
          </Reveal>
          <Reveal className="rounded-media">
            <img src={mission.image} alt={mission.imageAlt} loading="lazy" />
          </Reveal>
        </div>
      </section>

      <section className="section section--soft">
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

      <section className="section section--white">
        <div className="container">
          <Reveal>
            <p className="eyebrow">{activitiesIntro.eyebrow}</p>
            <h2 className="section-title">{activitiesIntro.title}</h2>
            <p className="section-lead">{activitiesIntro.description}</p>
          </Reveal>
          <div className="grid-3">
            {activities.map((item) => (
              <ActivityCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>

      <CTASection {...cta} />
    </>
  )
}
