import React from 'react'
import Hero from '../components/Hero';
import HomeCards from '../components/Homecard';
import JobListings from '../components/JobListings';
import ViewAllJobs from '../components/ViewAllJobs';

function HomePage() {
  return (
    <>
    <Hero />
    <HomeCards />
    <JobListings isHome={true} />
    <ViewAllJobs />
  </>
  )
}

export default HomePage