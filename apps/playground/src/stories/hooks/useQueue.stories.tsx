import PropTypes from 'prop-types'
import { ComponentMeta } from "@storybook/react";
import { useQueue } from "@nanlabs/react-hooks";



function Button({ disabled, onClick, className, value }) {
  return (
    <button disabled={disabled} onClick={onClick} className={className}>
      {value}
    </button>
  )
}

Button.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
  value: PropTypes.string,
}

function EnqueueItems({ first, last, size, queue }) {
  return (
    <figure>
      <article>
        <ul>
          {queue.map((item, i) => {
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
  )
}

EnqueueItems.propTypes = {
  first: PropTypes.number,
  last: PropTypes.number,
  size: PropTypes.number,
  queue: PropTypes.arrayOf(PropTypes.number),
  remove: PropTypes.func,
};

export function Enqueue() {
  const { add, remove, clear, first, last, size, queue } = useQueue([]);

  return (
    <div>
      <header>
        <h1>UseQueue</h1>
        <summary>Use a queue to add and remove items</summary>
        <legend>Queue</legend>
        <hr />
        <Button onClick={() => add((last || 0) + 1)} value={"Add"} />
        <Button disabled={size === 0} onClick={() => remove()} value={"Remove"} />
        <Button disabled={size === 0} onClick={() => clear()} value={"Clear"} />
      </header>
      <EnqueueItems first={first} last={last} size={size} queue={queue} />
    </div>
  );
}

export default {
  title: "React Hooks/useQueue",
  component: Enqueue,
} as ComponentMeta<typeof Enqueue>;
