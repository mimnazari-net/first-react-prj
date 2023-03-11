import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne, homeObjTwo, homeObjFour, homeObjThree } from './Data';
import { Link } from 'react-router-dom';

function Home() {
  return ( 
    <>
    <Link className='link' to = '/contact' >
      <HeroSection {...homeObjOne} />
    </Link>
      
    <Link className='link' to='/blogs' >
      <HeroSection {...homeObjTwo} />
    </Link>  
      
    <Link className='link' to='/services'  >
      <HeroSection {...homeObjThree} />
    </Link>   

    <Link className='link' to = '/celebrities' >
    <HeroSection {...homeObjFour} />
    </Link>
    
    </>
  );
}

export default Home;
