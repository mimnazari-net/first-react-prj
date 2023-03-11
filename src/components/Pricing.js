import React from 'react';
import { Button } from './Button';
import './Pricing.css';
import { FaCanadianMapleLeaf } from 'react-icons/fa';
import { FaEnvira } from 'react-icons/fa';
import { FaPagelines } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div className='pricing__section'>
        <div className='pricing__wrapper'>
          <h1 className='pricing__heading'>تعرفه اشتراک نشریات حوزه زنان</h1>
          <div className='pricing__container'>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <FaEnvira />
                </div>
                <h3> یک ماهه</h3>
                <h4>۳۰/۰۰۰</h4>
                <p>تومان </p>
                <ul className='pricing__container-features'>
                  <li>نشریه ندای دختران ایران</li>
                  <li>نشریه آفتاب</li>
                  <li>نشریه حوا</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='blue'>
                  خرید اشتراک
                </Button>
              </div>
            </Link>
                   
            
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <FaCanadianMapleLeaf />
                </div>
                <h3>شش ماهه </h3>
                <h4> ۱۰۰/۰۰۰ </h4>
                <p>تومان</p>
                <ul className='pricing__container-features'>
                  <li>دسترسی به تمامی نشریات</li>
                  <li>ارسال اخبار تخصصی</li>
                  <li>دسترسی نامحدود به مقالات</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                  خرید اشتراک
                </Button>
              </div>
            </Link>


            <Link to='/sign-up' className='pricing__container-card'> 
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <FaPagelines />
                </div>
                <h3> سه ماهه </h3>
                <h4>۶۰/۰۰۰</h4>
                <p>تومان</p>
                <ul className='pricing__container-features'>
                  <li>ارسال ۳ نشریه برتر </li>
                  <li>ارسال اخبار</li>
                  <li>دسترسی به ۵۰ مقاله بین المللی</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='blue'>
                  خرید اشتراک
                </Button>
              </div>
            </Link>





          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default Pricing;
