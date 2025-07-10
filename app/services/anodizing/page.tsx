import AnodizingHero from '@/components/Services/Anodizing/AnodizingHero'
import AnodizingSecond from '@/components/Services/Anodizing/AnodizingSecond'
import IdealApplication from '@/components/Services/Anodizing/IdealApplication'
import WhyAnodizing from '@/components/Services/Anodizing/WhyAnodizing'
import React from 'react'

const page = () => {
  return (
    <div>
      <AnodizingHero />
      <AnodizingSecond />
      <WhyAnodizing />
      <IdealApplication />
    </div>
  )
}

export default page
