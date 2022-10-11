import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/pages/Dashboard';
import Landing from './components/pages/landing';

const App = () => {

  return (
    <>
      <Routes>
            {1===2?
            <Route path="*" element={<Dashboard/>} />:
            <Route path="*" element={<Landing/>} />
            }
      </Routes>
    </>
  )
}

export default App