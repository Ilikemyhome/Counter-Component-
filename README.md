# Counter-Component

This project is a simple React application built with Vite to demonstrate core concepts of React state management, including:

useState

State as a snapshot

React’s batched updates

Correct vs incorrect state updates

Asynchronous updates using setTimeout

The main component, Counter.jsx, includes multiple buttons that intentionally behave differently to highlight how React processes state updates.

## Setup Instructions
1. Create the project
bash
npm create vite@latest portfolio-app -- --template react
cd portfolio-app
npm install
npm run dev

export default App;
## Counter Component Features
The Counter component displays the current count and includes four buttons:

1. Increment
Increases the count by 1 using:

js
setCount(count + 1);
2. Increment After Delay
Uses setTimeout to increment after 2 seconds.
Demonstrates stale snapshots.

3. Increment Twice (Incorrect)
Calls:

js
setCount(count + 1);
setCount(count + 1);
React batches these updates → both use the same snapshot → only increments once.

4. Correct Increment Twice
Uses updater functions:

js
setCount(prev => prev + 1);
setCount(prev => prev + 1);
Each update receives the latest value → increments by 2.

## Test Cases


Below are the documented cases and expected results.

### Normal Test Cases
Normal Case 1 — Increment increases by 1
Initial: count = 0

Action: Click Increment

Expected: count = 1

Result:  Passed

Normal Case 2 — Incorrect Increment Twice only increments by 1
Initial: count = 5

Action: Click Increment Twice

Expected: count = 6

Reason: Both updates use the same snapshot

Result: Passed

Normal Case 3 — Correct Increment Twice increments by 2
Initial: count = 10

Action: Click Correct Increment Twice

Expected: count = 12

Result:  Passed

###  Edge Test Cases
Edge Case 1 — Delay uses stale snapshot
Initial: count = 0

Action:

Click Increment After Delay

Immediately click Increment

Expected: After 2 seconds → count = 1

Reason: Timeout captured old snapshot

Result:  Passed

Edge Case 2 — Spamming Increment After Delay still results in +1
Initial: count = 0

Action: Click Increment After Delay rapidly 10+ times

Expected: After 2 seconds → count = 1

Reason: All timeouts captured the same snapshot

Result: Passed

Edge Case 3 — Correct Increment Twice handles batching under rapid clicks
Initial: count = 0

Action: Click Correct Increment Twice 3 times quickly

Expected: count = 6

Reason: Updater function always receives latest value

Result:  Passed