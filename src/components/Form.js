import React from 'react';
import './Form.css'
import { Button } from './Button';
import { Link } from 'react-router-dom';


function Form({

    title,
    firstlable,
    secondlable,
    thirdlable,
    buttonLabel,
    img,
    alt,
    imgStart
    
  }) { 
    return (
        <>
          <div
            className= 'form-section'
          >
            <div className='form-container'>
              <div
                className='form--row form-row'
                style={{
                  display: 'flex',
                  flexDirection: imgStart === 'start' ? 'form--row-reverse' : 'form--row'
                }}
              >
                <div className='form--col'>
                  <div className='form-text-wrapper'>

                    <h1 className= 'form-heading form-dark'>
                      {title}
                    </h1>
                    
                    <form className='form--temp'>
                        <label className='label--form' > {firstlable} </label>
                        <input  className='input--form' type="text"  required />

                        <label className='label--form'> {secondlable} </label>
                        <input className='input--form' type="email"  required />

                        <label className='label--form' > {thirdlable} </label>
                        <textarea className='txtarea--form' rows="3" required></textarea>
                   
                    <Link to='/services'>
                      <Button buttonSize='btn--wide' buttonColor='blue' >
                        {buttonLabel}
                      </Button>
                    </Link>

                    </form>

                  </div>
                </div>

                <div className='form--col'>
                  <div className='form-img-wrapper'>
                    <img src={img} alt={alt} className='form-img' />
                  </div>
                </div>

              </div>
            </div>
           </div>
          
        </>
      );
    }
    
    export default Form;
    