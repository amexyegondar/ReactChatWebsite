import { useContext } from 'react';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import {BrowserRouter,Navigate,Route,Routes} from 'react-router-dom'
import { AuthContext } from './context/AuthContext';
function App() {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser)
  // const ProtectedRoute=({children})=>{
  //   if (!currentUser){
  //     return <Navigate to='/login'/>
  //   }
  // }
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
      <Route  path='/'>
      <Route index element={currentUser? <Home/>:<Login/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='register' element={<Register/>}/>

        <Route/>
      </Route>
        

        

      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
