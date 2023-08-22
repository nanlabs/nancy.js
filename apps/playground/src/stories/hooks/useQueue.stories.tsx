import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useQueue } from '@nanlabs/react-hooks';

interface ButtonProps {
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  value?: string;
}

function Button({ disabled, onClick, className, value }: ButtonProps) {
  return (
    <button disabled={disabled} onClick={onClick} className={className}>
      {value}
    </button>
  );
}

interface EnqueueItemsProps {
  first?: number | never;
  last?: number | never;
  size?: number | never;
  queue?: never[] | number[];
  remove?: () => void;
}

function EnqueueItems({ first, last, size, queue }: EnqueueItemsProps) {
  return (
    <figure>
      <article>
        <ul>
          {queue?.map((item, i) => {
            const isFirst = first === item;
            const isLast = last === item;
            if (isFirst) {
              return <li key={i}>First: {item}</li>;
            }
            if (isLast) {
              return <li key={i}>Last: {item}</li>;
            }
            return <li key={i}>Item: {item}</li>;
          })}
        </ul>
      </article>
      <figcaption>{size} items in the queue</figcaption>
    </figure>
  );
}

export const Enqueue: ComponentStory<typeof EnqueueItems> = () => {
  const { add, remove, clear, first, last, size, queue } = useQueue([]);

  const handleAdd = () => {
    add((last || 0) + 1);
  };

  return (
    <div>
      <header>
        <h1>UseQueue</h1>
        <summary>Use a queue to add and remove items</summary>
        <legend>Queue</legend>
        <hr />
        <Button onClick={handleAdd} value={'Add'} />
        <Button disabled={size === 0} onClick={() => remove?.()} value={'Remove'} />
        <Button disabled={size === 0} onClick={() => clear?.()} value={'Clear'} />
      </header>
      <EnqueueItems first={first} last={last} size={size} queue={queue} />
    </div>
  );
};

export default {
  title: 'React Hooks/useQueue',
  component: EnqueueItems,
} as ComponentMeta<typeof EnqueueItems>;
