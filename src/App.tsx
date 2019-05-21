import React from 'react';
import './App.css';

import FadeEffect from './components/FadeEffect';

const App: React.FC = () => {
  return (
    <div className="App">
      <FadeEffect>
        <div className="App--base">
          <p>Hello, world!</p>
          <p>
            Yeah well, you shouldn't drink. You know Marty, I'm gonna be very sad to see you go. You've really mad a difference in my life, you've given me something to shoot for. Just knowing, that I'm gonna be around to se 1985, that I'm gonna succeed in this. That I'm gonna have a chance to travel through time. It's going to be really hard waiting 30 years before I could talk to you about everything that's happened in the past few days. I'm really gonna miss you, Marty. Well, I figured, what the hell. Marty, such a nice name. Flux capacitor.
          </p>
          <p>
            I just wanna use the phone. Uh? It's already mutated into human form, shoot it. Save the clock tower, save the clock tower. Mayor Wilson is sponsoring an initiative to replace that clock. Thirty years ago, lightning struck that clock tower and the clock hasn't run since. We at the Hill Valley Preservation Society think it should be preserved exactly the way it is as part of our history and heritage. A colored mayor, that'll be the day.
          </p>
          <p>
            Now Biff, don't con me. Thanks a lot, kid. Jennifer. No, Biff, you leave her alone. Well uh, good, fine.
          </p>
        </div>
      </FadeEffect>
    </div >
  );
}

export default App;
