import Hero from '../components/Hero'
import ActivityCard from '../components/ActivityCard'
import CTASection from '../components/CTASection'
import SEO from '../components/SEO'
import Reveal from '../components/Reveal'
import { activities, activitiesPage, homeContent } from '../data/websiteContent'

export default function Activities() {
  const { seo, hero } = activitiesPage

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
            <p className="eyebrow">Programs</p>
            <h2 className="section-title">
              Comprehensive <span className="accent">Care &amp; Support</span>
            </h2>
            <p className="section-lead">
              Explore the initiatives that shape our work for animals and communities.
            </p>
          </Reveal>
          <div className="grid-3">
            {activities.map((item) => (
              <ActivityCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>

      <CTASection {...homeContent.cta} />
    </>
  )
}
