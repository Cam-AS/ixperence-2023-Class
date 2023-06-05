import React, { useState } from 'react';

// import style file
import './Demo.css';

export default function Demo(props) {
  const [count, setCount] = useState(props.count);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return (
    <div className="example-card p-3 m-5">
      <h5>Name: {props.name}</h5>
      <h5>Title: {props.title}</h5>

      <p className="text-center">
        Note: Each Component hold it's own state, so when we increment our
        count. React knows which Component State to update.
      </p>

      <div className="text-center">
        <div>{count}</div>
        <button onClick={decrement} className="btn btn-danger me-1 mt-3">
          Decrement
        </button>
        <button onClick={increment} className="btn btn-primary ms-1 mt-3">
          Increment
        </button>
      </div>
    </div>
  );
}
