import { useEffect } from 'react';
import { initializeBicker } from './reducers/bickersReducer';
import { useDispatch } from 'react-redux'
import BickerList from './components/BickerList';

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeBicker())
  }, [dispatch])

  return (
    <div>
      <h1>Bickers</h1>
      <BickerList />
    </div>
  )
}

export default App;
