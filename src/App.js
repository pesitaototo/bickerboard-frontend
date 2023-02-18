import { useEffect } from 'react';
import { initializeBicker } from './reducers/bickersReducer';
import { initializeBickering } from './reducers/bickeringReducer';
import { useDispatch, useSelector } from 'react-redux'
import BickerList from './components/BickerList';
import BickeringList from './components/BickeringList';
import Header from './components/Header';
import {
  Link,
  Route,
  Routes,
  useMatch
} from 'react-router-dom'
import Bicker from './components/Bicker';
import LoginForm from './components/LoginForm';
import UserModal from './components/UserModal';
import Navigation from './components/Navigation';

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeBicker())
    dispatch(initializeBickering())
  }, [dispatch])

  const bickers = useSelector(state => state.bickers)

  const bickerMatch = useMatch('/bickers/:id')
  const bicker = bickerMatch 
    ? bickers.filter(b => b.id === bickerMatch.params.id)[0]
    : null


  return (
    <div>
    <Header />
    <Navigation />
    <Routes>
      <Route path='/' element={
        <>
          <div className="homepage">
          <BickerList/>
          <BickeringList/>
          </div>
        </>
      }/>
      <Route path="/login" element={<LoginForm />} />
      <Route path="/bickers/:id" element={<Bicker bicker={bicker} />} />
    </Routes>
    </div>
  )
}

export default App;
