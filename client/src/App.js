import './App.css';
import { BrowserRouter ,Routes ,Route} from 'react-router-dom' ;
import Navbar from './components/navbar';
import Register from './components/register';
import Login from './components/login';
import Myprofile from './components/myprofile';
import React , { useState , createContext } from 'react';

export const store = createContext() ;

function App() {
  const [token,setToken] = useState(null) ;
  return (
    <div className="App">
      <store.Provider value={[token,setToken]}>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path='/register' element={<Register/>} />
        <Route exact path='/login' element={<Login/>} />
        <Route exact path='/myprofile' element={<Myprofile/>} />
      </Routes>

      </BrowserRouter>
      </store.Provider>
    </div>
  );
}

export default App;
