// src/Counter.jsx
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  // 1. Normal increment
  const handleIncrement = () => {
    setCount(count + 1);
  };

  // 2. Increment after delay (shows snapshot behavior)
  const handleIncrementAfterDelay = () => {
    setTimeout(() => {
      // This uses the *snapshot* of count at the time the timeout was created
      setCount(count + 1);
    }, 2000);
  };

  // 3. Incorrect "increment twice" (shows batching)
  const handleIncrementTwice = () => {
    setCount(count + 1);
    setCount(count + 1);
    // React batches these → both use the same snapshot → +1 total
  };

  // 4. Correct "increment twice" using updater function
  const handleCorrectIncrementTwice = () => {
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
    // Each update receives the latest value → +2 total
  };

  const resetCounter = () => {
    setCount(0);
  };

  return (
    <div style={styles.container}>
      <h2>React State Snapshot Demo</h2>
      <p style={styles.count}>Count: {count}</p>

      <div style={styles.buttonGroup}>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleIncrementAfterDelay}>Increment After Delay</button>
        <button onClick={handleIncrementTwice}>Increment Twice</button>
        <button onClick={handleCorrectIncrementTwice}>Correct Increment Twice</button>
        <button onClick={resetCounter}>Reset</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "2rem",
    textAlign: "center",
    fontFamily: "sans-serif",
  },
  count: {
    fontSize: "2rem",
    marginBottom: "1rem",
  },
  buttonGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    maxWidth: "250px",
    margin: "0 auto",
  },
};
