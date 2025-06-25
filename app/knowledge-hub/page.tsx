import Blogs from '@/components/KnowledgeHub/Blogs'
import HubDownloadCTA from '@/components/KnowledgeHub/HubDownloadCTA'
import HubHero from '@/components/KnowledgeHub/HubHero'
import HubIndustryNews from '@/components/KnowledgeHub/HubIndustryNews'
import NewsletterSignup from '@/components/KnowledgeHub/NewsletterSignup'
import React from 'react'

const page = () => {
  return (
    <div>
      <HubHero />
      <HubIndustryNews />
      <Blogs />
      <HubDownloadCTA />
      <NewsletterSignup />
    </div>
  )
}

export default page
