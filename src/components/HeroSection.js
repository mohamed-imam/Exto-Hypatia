import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/AAST.mp4' autoPlay playsInline loop muted />
      <h1>AAST Student Portal</h1>
      <p>AASTMT Student Portal is an online gateway where students can log in to access important program information.</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'

        >SIGN IN</Button>
        
        <Button
          
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
          
        >
          Problem?
          SEND E-MAIL <i className='fas fa-envelope' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;