"use client"
import React, { useEffect } from 'react'
import ContentSecundary from '../container-projects'
import ContentPrimary from '../application-main';

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
      </>
  )
}
