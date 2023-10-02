import React, { useCallback, useMemo, useRef, useState } from 'react';
import { useHover } from '../../../../../packages/react-hooks/use-hover';
// import { useHover } from "@nanlabs/react-hooks";

export const Example = () => {
  const [isCbMemoBroken, setIsCbMemoBroken] = useState(false);
  const [isTargetMemoBroken, setTargetMemoBroken] = useState(false);
  const [events, setEvents] = useState<string[]>([])

  const getEventHandler = useCallback((eventName: string) => {
    return () => setEvents((events) => [...events, `"${eventName}" callback fired`])
  }, [setEvents])

  const memoizedCallbacks = useMemo(
    () => ({
      onChange: getEventHandler('onChange'),
      onLeave: getEventHandler('onLeave'),
      onEnter: getEventHandler('onEnter'),
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [getEventHandler, isCbMemoBroken]
  )

  const notMemoizedCallbacks = {
    onChange: getEventHandler('onChange'),
    onLeave: getEventHandler('onLeave'),
    onEnter: getEventHandler('onEnter'),
  }
  
  const divRef = useRef<HTMLDivElement | null>(null)
  const getEl = () => divRef.current;

  const isHovered = useHover(
    isTargetMemoBroken ? getEl : divRef,
    isCbMemoBroken ? notMemoizedCallbacks : memoizedCallbacks
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
        <button onClick={() => setIsCbMemoBroken((val) => !val)}>
          {isCbMemoBroken ? 'Callbacks change each render' : 'Callbacks memoized'}
        </button>
      </span>

      <span>
        <button onClick={() => setTargetMemoBroken((val) => !val)}>
          {isTargetMemoBroken ? 'Target provided as function' : 'Target provided as ref'}
        </button>
      </span>
    </div>
    <div> Event log:
      <ol>
        {events.map((event, i) => <li key={i}>{event}</li>)}
      </ol>
    </div>
  </div>;
};

export default {
  title: 'React Hooks/useHover',
  component: useHover,
};
