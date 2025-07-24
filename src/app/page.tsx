import React from 'react'
import Hero from './_components/Hero'
import WhySkedara from './_components/WhySkedara'
import Service from './_components/Service'
import CaseStudy from './_components/CaseStudy'
import Certifications from './_components/Certifications'

const page = () => {
  return (
    <div >
   <Hero/> 
   <WhySkedara/>   
   <Service/>
   <CaseStudy/>
   <Certifications/>
    </div>
  )
}

export default page