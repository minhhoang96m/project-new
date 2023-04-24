import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '~/app/hooks'
import {
  decrement,
  increment,
  incrementByAmount,
  selectCount,
} from '~/features/counter/counterSlice'

const Counter = () => {
  const dispatch = useAppDispatch()
  const count = useAppSelector(selectCount)
  const [incrementAmount, setIncrementAmount] = useState<number>(0)
  return (
    <div>
      <h1>Welcome to the greatest app in the world!</h1>
      <h2>
        The current number is
        &nbsp;
        {count}
      </h2>

      <div>
        <button onClick={() => dispatch(decrement())}>Decrement by 1</button>
        <button onClick={() => dispatch(increment())}>Increment by 1</button>
      </div>

      <div>
        <input
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(Number(e.target.value))}
          type='number'
        />
        <button
          onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}
        >
          Increment by amount
        </button>
      </div>
   
    </div>
  )
}

export default Counter
