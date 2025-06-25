import ProductCTA from '@/components/Products/ProductCTA'
import ProductExplore from '@/components/Products/ProductExplore'
import ProductHero from '@/components/Products/ProductHero'
import React from 'react'

const page = () => {
  return (
    <div>
      <ProductHero />
      <ProductExplore />
      <ProductCTA />
    </div>
  )
}

export default page
