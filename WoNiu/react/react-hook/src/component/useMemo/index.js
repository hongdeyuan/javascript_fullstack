// useMemo(useCallBack) 优化React Hooks 程序的性能

import React, { useState, useMemo, memo } from 'react'

function Example() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

  const handleSetStep = () => {
    setStep(step + 1);
  }

  const handleSetCount = () => {
    setCount(count + 1);
  }

  const handleCalNumber = () => {
    setNumber(count + step);
  }

  // React.useEffect(() => {
  //   setInterval(() => {
  //     setStep(pre => pre + 1);
  //   }, 5000);
  // }, [])

  console.log('render father...')

  return (
    <div>
      <button onClick={handleSetStep}>step is : {step} </button>
      <button onClick={handleSetCount}>count is : {count} </button>
      <button onClick={handleCalNumber}>number is : {number} </button>
      <hr />
      <Child step={step} count={count} number={number} /> <hr />
      <ChildMemo step={step} count={count} number={number} />
    </div>
  );
}

const Child = (props = {}) => {
  console.log(`--- re-render ---`);
  return (
    <div>
      {/* <p>step is : {props.step}</p> */}
      {/* <p>count is : {props.count}</p> */}
      <p>number is : {props.number}</p>
    </div>
  );
};

const isEqual = (prevProps, nextProps) => {
    if (prevProps.number !== nextProps.number) {
        return false;
  }
  return true;
}

const ChildMemo = memo((props = {}) => {
    console.log(`--- memo re-render ---`);
    return (
        <div>
            {/* <p>step is : {props.step}</p> */}
            {/* <p>count is : {props.count}</p> */}
            <p>number is : {props.number}</p>
        </div>
    );
}, isEqual);

export default Example