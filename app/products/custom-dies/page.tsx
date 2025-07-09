import CustomDiesHero from '@/components/Products/CustomDies/CustomDiesHero'
import CustomDiesQuote from '@/components/Products/CustomDies/CustomDiesQuote'
import DieCapabalities from '@/components/Products/CustomDies/DieCapabalities'
import WhyCustomDies from '@/components/Products/CustomDies/WhyCustomDies'
import React from 'react'

const page = () => {
  return (
    <div>
      <CustomDiesHero /> 
      <CustomDiesQuote />
      <DieCapabalities />
      <WhyCustomDies /> 
    </div>
  )
}

export default page
