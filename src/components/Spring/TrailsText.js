import React from 'react';
import { useTrail, animated } from 'react-spring'

const items = ['Lorem', 'ipsum', 'dolor', 'sit']
const config = { mass: 5, tension: 2000, friction: 200 }

const TrailsText = () => (
  <div className="trails-main" onClick={() => set(state => !state)}>
      <div>
        {trail.map(({ x, height, ...rest }, index) => (
          <animated.div
            key={items[index]}
            className="trails-text"
            style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
            <animated.div style={{ height }}>{items[index]}</animated.div>
          </animated.div>
        ))}
      </div>
    </div>
)
    

export default TrailsText;
