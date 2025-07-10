import ApplicationOfPC from '@/components/Services/PowderCoating/ApplicationOfPC'
import PowderCoatingHero from '@/components/Services/PowderCoating/PowderCoatingHero'
import PowderCoatingSecond from '@/components/Services/PowderCoating/PowderCoatingSecond'
import WhyPowderCoating from '@/components/Services/PowderCoating/WhyPowderCoating'
import React from 'react'

const page = () => {
  return (
    <div>
      <PowderCoatingHero />
      <PowderCoatingSecond />
      <WhyPowderCoating />
      <ApplicationOfPC />
    </div>
  )
}

export default page
