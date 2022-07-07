

import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';


const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>
        <img src={urlFor(heroBanner.image)} alt="headphones" className="hero-banner-image" />

        <div>
        
          <div className="desc">
            <h5>Noise-Cancelling Headphones.</h5>
            <p>{heroBanner.desc}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner

//<img src="https://cdn.sanity.io/images/6fyxtftn/production/a205aaa5ac2c75342801e683c3b78ea2fff8913b-600x600.webp" alt="headphones" class="hero-banner-image">