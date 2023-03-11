import React, { useState, useEffect } from "react";
import "./Slider.css";
import data from '../components/pages/Celebirites/Data';
import {CgPlayTrackNextR , CgPlayTrackPrevR} from 'react-icons/cg'

const Slider = () => {
  const [people] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <div className='bg'>
    <section className="slider">
      <div className="slider--title">
        <h1 className="slider--h1">زنان برجسته ایرانی</h1>
      </div>
      <div className="slider--center">
        {people.map((item, indexPeople) => {
          const { id, image, name, title, quote } = item;
          let position = "nextSlide";
          if (indexPeople === index) {
            position = "activeSlide";
          }
          if (
            indexPeople === index - 1 ||
            (index === 0 && indexPeople === people.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className="person--img" />
              <h4 className="slider--h4">{name}</h4>
              <p className="slider--title">{title}</p>
              <p className="slider--text">{quote}</p>
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <CgPlayTrackPrevR />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <CgPlayTrackNextR />
        </button>
      </div>
    </section>
    </div>
  );
};

export default Slider;
