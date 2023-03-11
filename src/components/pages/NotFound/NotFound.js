import React from 'react'
import { homeObjOne } from './Data';
import { Link } from 'react-router-dom';
import HeroSection from '../../HeroSection';



function NotFound() {
  return (
    <>
    <Link to = '/' >
      <HeroSection {...homeObjOne} />
    </Link>
    </>
  )
}

export default NotFound