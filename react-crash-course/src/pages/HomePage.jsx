import React from 'react'
import Hero from '../components/Hero'
import HouseCards from '../components/HouseCards'
import JobListings from '../components/jobListings'
import ViewAllJobs from '../components/ViewAllJobs'

const HomePage = () => {
  return (
    <>
      <Hero />
      <HouseCards />
      <JobListings isHome={true} />
      <ViewAllJobs />
    </>
  )
}

export default HomePage