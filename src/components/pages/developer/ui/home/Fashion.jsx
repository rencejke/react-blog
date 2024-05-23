import React from 'react'
import SectionBanner from './SectionBanner'
import Card from './Card'

const Fashion = () => {
  return (
    <section className='fashion py-10'>
  <div className="container">
    <SectionBanner title="Fashion & Style" hasLink={true} link='/featured'/>
     <div className='grid gap-10 md:grid-cols-3 mt-10'>
   <Card height='sm'/>
   <Card height='sm'/>
   <Card height='sm'/>
   <Card height='sm'/>
   <Card height='sm'/>
   <Card height='sm'/>
   </div>
  </div>
  </section>
  )
}

export default Fashion
