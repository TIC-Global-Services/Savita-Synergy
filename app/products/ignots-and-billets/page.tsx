import ApplicationOfBillets from '@/components/Products/Ignots/ApplicationOfBillets'
import IgnotsCTA from '@/components/Products/Ignots/IgnotsCTA'
import IgnotsHero from '@/components/Products/Ignots/IgnotsHero'
import IgnotsSecond from '@/components/Products/Ignots/IgnotsSecond'
import WhyIgnotsBillets from '@/components/Products/Ignots/WhyIgnotsBillets'
import React from 'react'

const page = () => {
  return (
    <div>
      <IgnotsHero />
      <IgnotsSecond />
      <IgnotsCTA />
      <ApplicationOfBillets />
      <WhyIgnotsBillets />
    </div>
  )
}

export default page
