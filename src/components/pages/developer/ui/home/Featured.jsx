import React from 'react'
import Card from './Card'
import SectionBanner from './SectionBanner'

const Featured = () => {
  return (
    <section className='featured py-10'>
  <div className="container">
    <SectionBanner title="Feature now" hasLink={true} link='/featured'/>
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

export default Featured