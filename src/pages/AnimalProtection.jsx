import Hero from '../components/Hero'
import CTASection from '../components/CTASection'
import SEO from '../components/SEO'
import Reveal from '../components/Reveal'
import { animalProtectionPage, homeContent } from '../data/websiteContent'

export default function AnimalProtection() {
  const { seo, hero, intro, sections } = animalProtectionPage

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

      <section className="section section--mint">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Animal Protection</p>
            <h2 className="section-title">{intro.title}</h2>
            <p className="section-lead">{intro.body}</p>
          </Reveal>
        </div>
      </section>

      <section className="section section--white">
        <div className="container content-sections">
          {sections.map((section, index) => (
            <Reveal
              as="article"
              key={section.id}
              id={section.id}
              className={`content-section-card ${index % 2 === 1 ? 'content-section-card--reverse' : ''}`}
            >
              <div className="content-section-card__media">
                <img src={section.image} alt={section.imageAlt} loading="lazy" />
              </div>
              <div className="content-section-card__body">
                <h2>{section.title}</h2>
                <p>{section.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection {...homeContent.cta} />
    </>
  )
}
