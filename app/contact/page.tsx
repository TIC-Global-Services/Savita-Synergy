import ContactForm from '@/components/Contact/ContactForm'
import ContactHero from '@/components/Contact/ContactHero'
import FAQ from '@/components/Contact/FAQ'
import React from 'react'

const page = () => {
  return (
    <div>
      <ContactHero />
      <ContactForm />
      <FAQ />
    </div>
  )
}

export default page
