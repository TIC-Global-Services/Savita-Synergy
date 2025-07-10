import CustomFabHero from '@/components/Services/CustomFabrication/CustomFabHero'
import CustomFabSecond from '@/components/Services/CustomFabrication/CustomFabSecond'
import FabCapbalities from '@/components/Services/CustomFabrication/FabCapabilities'
import WhyCustomFab from '@/components/Services/CustomFabrication/WhyCustomFB'
import React from 'react'

const page = () => {
  return (
    <div>
      <CustomFabHero />
      <CustomFabSecond />
      <FabCapbalities />
      <WhyCustomFab />
    </div>
  )
}

export default page
