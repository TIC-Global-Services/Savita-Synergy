import ApplicationMain from '@/components/Products/Ignots/ApplicationMain'
import ApplicationOfBillets from '@/components/Products/Ignots/ApplicationOfBillets'
import Billets from '@/components/Products/Ignots/Billets'
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
      <ApplicationMain />
      <Billets />
      <ApplicationOfBillets />
      <WhyIgnotsBillets />
    </div>
  )
}

export default page
