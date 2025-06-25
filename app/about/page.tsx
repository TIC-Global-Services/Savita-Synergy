import AboutHero from '@/components/About/AboutHero'
import CoreValues from '@/components/About/CoreValues'
import OtherVentures from '@/components/About/OtherVentures'
import OurMission from '@/components/About/OurMission'
import OurStory from '@/components/About/OurStory'
import OurTeam from '@/components/About/OurTeam'
import SocialResponse from '@/components/About/SocialResponse'
import React from 'react'

const page = () => {
  return (
    <div>
      <AboutHero />
      <OurStory />
      <OurMission />
      <CoreValues />
      <OurTeam />
      <SocialResponse />
      <OtherVentures />
    </div>
  )
}

export default page
