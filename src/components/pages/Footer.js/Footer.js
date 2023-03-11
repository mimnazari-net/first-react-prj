import React from 'react';
import './Footer.css';
import { Button } from '../../Button';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import { MdFingerprint } from 'react-icons/md';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          امیدواریم سایت هویت برای شما مفید بوده باشد
          </p>  
        <p className='footer-subscription-text'>
          جهت ارتباط بیشتر ایمیل تان را برای ما ثبت کنید‌
          </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='ایمیل خود را وارد کنید'
            />
            <Button buttonStyle='btn--outline'>ارسال</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h3>درباره ما</h3>
            <Link to='/sign-up'>معرفی اجمالی </Link>
            <Link to='/'> اعضای تیم ما </Link>
            <Link to='/'> هویت نامه </Link>

          </div>
          <div className='footer-link-items'>
            <h3> چندرسانه‌ای</h3>
            <Link to='/'>فیلم</Link>
            <Link to='/'>عکس</Link>
            <Link to='/'>پادکست</Link>
        
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h3>ارتباط با ما </h3>
            <Link to='/'> آدرس </Link>
            <Link to='/'>شماره تلفن</Link>
            <Link to='/'>پشتیبانی</Link>
            
          </div>
          <div className='footer-link-items'>
            <h3>شبکه اجتماعی</h3>
            <Link to='/'>اینستاگرام</Link>
            <Link to='/'>فیسبوک</Link>
            <Link to='/'>توییتر</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <MdFingerprint className='navbar-icon' />
              هویت
            </Link>
          </div>
          
          <div className='social-icons'>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </Link>
            <Link
              className='social-icon-link'
              to = '/'
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <FaTwitter />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
