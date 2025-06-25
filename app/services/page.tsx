import ServicesCTA from '@/components/Services/ServicesCTA'
import ServicesExplore from '@/components/Services/ServicesExplore'
import ServicesHero from '@/components/Services/ServicesHero'
import React from 'react'

const page = () => {
  return (
    <div>
      <ServicesHero />
      <ServicesExplore />
      <ServicesCTA />
    </div>
  )
}

export default page
