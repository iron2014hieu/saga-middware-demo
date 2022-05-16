import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { increase } from './redux/actions';

function App() {
  const count = useSelector(state=> state.count)
  const dispatch = useDispatch()

  const handleIncrease = () => {
    dispatch(
      increase()
    )
  }
  const handleDecrease = () => {
    // dispatch(

    // )
  }
  return (
    <div className="App">
      {count}
     <div>
      <button onClick={handleDecrease}>-</button>
     <button onClick={handleIncrease}>+</button>
     </div>
    </div>
  );    
}

export default App;
