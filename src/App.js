import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Component/Home';
import Userlisting from './Component/Userlisting';
import Adduser from './Component/Adduser';
import Updateuser from './Component/Updateuser';
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className="header"></div>
        <Routes>
          <Route path='/' Component={Home}></Route>
          <Route path='/user' Component={Userlisting}></Route>
          <Route path='/user/add' Component={Adduser}></Route>
          <Route path='/user/edit/:code' Component={Updateuser}></Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer/>
    </div>
  );
}

export default App;
