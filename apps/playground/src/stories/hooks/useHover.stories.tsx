import React, { useCallback, useMemo, useRef, useState } from 'react';
import { useHover } from "@nanlabs/react-hooks";

export const Example = () => {
  const [isMemoEnabled, setIsMemoEnabled] = useState(false);
  const [isRefTarget, setIsRefTarget] = useState(false);
  const [events, setEvents] = useState<string[]>([])

  const getEventHandler = useCallback((eventName: string) => {
    return () => setEvents((events) => [...events, `"${eventName}" callback fired`])
  }, [setEvents])

  const notMemoizedCallbacks = {
    onChange: getEventHandler('onChange'),
    onLeave: getEventHandler('onLeave'),
    onEnter: getEventHandler('onEnter'),
  }

  const memoizedCallbacks = useMemo(() => ({...notMemoizedCallbacks}), [getEventHandler])
  
  const divRef = useRef<HTMLDivElement | null>(null)
  const getElement = () => divRef.current;

  const isHovered = useHover(
    isRefTarget ? divRef : getElement,
    isMemoEnabled ? memoizedCallbacks : notMemoizedCallbacks
  );

  const hoverableStyles = {
    width: 200,
    height: 200,
    backgroundColor: isHovered ? 'tomato' : 'rebeccapurple',
    color: isHovered ? 'black' : 'white',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10
  }

  return <div style={{display: 'flex', gap: 10}}>
    <div style={hoverableStyles} ref={divRef}>
      <h2>
        {isHovered ? 'Hovered' : 'Hover me'}
      </h2>

      <span>
        <button onClick={() => setIsMemoEnabled((val) => !val)}>
          {isMemoEnabled ? 'Callbacks memoized' : 'Callbacks change each render'}
        </button>
      </span>

      <span>
        <button onClick={() => setIsRefTarget((val) => !val)}>
          {isRefTarget ? 'Target provided as ref' : 'Target provided as function'}
        </button>
      </span>
    </div>
    <div> Event log:
      <ol>
        {events.map((event, i) => <li key={`${event}-${i}`}>{event}</li>)}
      </ol>
    </div>
  </div>;
};

export default {
  title: 'React Hooks/useHover',
  component: useHover,
};
