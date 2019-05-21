import React from 'react';
import './FadeEffect.css';

const FadeEffect: React.FC = (props) => {
  return (
    <div className="FadeEffect--container">
        { props.children }
        <div className="FadeEffect--fade-container">
            <section className='FadeEffect--fade'></section>
            <section className='FadeEffect--expand'>
                <a href="#">Read More</a>
            </section>
        </div>
    </div>
  );
}

export default FadeEffect;
