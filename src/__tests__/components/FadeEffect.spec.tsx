import React from 'react';
import ReactDOM from 'react-dom';
import FadeEffect from '../../components/FadeEffect';

describe('FadeEffect component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<FadeEffect />, div);
        ReactDOM.unmountComponentAtNode(div);
      });
});
