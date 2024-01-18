import React from 'react';
import { About, Banner, Blog, Contactinfo, Projects, Service, Team, Testimonial, Whychoose } from "../containers";

const Homepage = () => {
  return (
      <>
          <Banner />
          <Contactinfo />
          <About />
          <Service />
          <Whychoose />
          <Projects />
          <Team />
          <Testimonial />
          <Blog />
      </>
  )
}

export default Homepage