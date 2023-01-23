import { useEffect } from 'react';
import { initializeBicker } from './reducers/bickersReducer';
import { initializeBickering } from './reducers/bickeringReducer';
import { useDispatch } from 'react-redux'
import BickerList from './components/BickerList';
import BickeringList from './components/BickeringList';
import Header from './components/Header';

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeBicker())
    dispatch(initializeBickering())
  }, [dispatch])

  return (
    <div>
      <Header />
      <div className="homepage">
      <BickerList />
      <BickeringList />
      </div>
      {/* <BickeringList /> */}
    </div>
  )
}

export default App;
