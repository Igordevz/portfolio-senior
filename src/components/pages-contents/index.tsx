"use client"
import React, { useEffect } from 'react'
import ContentSecundary from '../container-projects'
import ContentPrimary from '../application-main';
import About from '../about';
import Education from '../educations';
import Contact from '../contact';

export default function ControllersPageLanding() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
      <>
      <ContentPrimary/>
      <ContentSecundary/>
      <About/>
      <Education/>
      <Contact/>
      </>
  )
}
