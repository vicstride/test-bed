import React, { useState } from 'react';
import './FadeEffect.css';

const FadeEffect: React.FC = (props) => {
  const [state, setState] = useState({ expanded: false });

  const toggleCompact = () => { 
    setState({ ...state, expanded: !state.expanded });
  }

  return (
    <section className={'FadeEffect--container' + `${state.expanded ? ' expanded' : ''}`}>
        { props.children }
        <div className={'FadeEffect--fade-container' + `${state.expanded ? ' expanded' : ''}`}>
            <section className={'FadeEffect--fade' + `${state.expanded ? ' expanded' : ''}`} role='presentation'></section>
            <section className={'FadeEffect--button' + `${state.expanded ? ' expanded' : ''}`} onClick={toggleCompact} role='button'>
                {state.expanded ? 'Shrink me!' : 'Expand me!'}
            </section>
        </div>
    </section>
  );
}

export default FadeEffect;
