import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>LIFE @ AASTMT!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          <CardItem
              src='images/AASTMT.jpg'
              text='Learn more about our beautiful campus.'
              label='AAST Abu Qir Campus'
              path='/services'
            />
            <CardItem
              src='images/Google.jpg'
              text='Student Practical Training'
              label='Googleplex' 
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
          <CardItem
              src='images/social activities.jpg'
              text='Cultural And Social Activities'
              label='Volunteer Activity'
              path='/services'
            />
            <CardItem
              src='images/health.jpg'
              text='Medical '
              label='To keep our studients at their optimum health'
              path='/services'
            />
            <CardItem
              src='images/sports.jpg'
              text='Sport life at universty'
              label='Sports'
              path='/signin'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
