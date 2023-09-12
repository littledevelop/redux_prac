import './App.css';
import {BrowserRouter,Routes,Route, Link} from 'react-router-dom';
import Home from './Component/Home';
import Userlisting from './Component/Userlisting';
import Adduser from './Component/Adduser';
import Updateuser from './Component/Updateuser';
import { ToastContainer } from 'react-toastify';
import {Provider} from 'react-redux';
import Store from './Redux/Store';
function App() {
  return (
<Provider store={Store}>

    <div className="App">
      <BrowserRouter>
      <div className="header">
        <Link to={'/'}>Home</Link> &nbsp;
        <Link to={'/user'}>User</Link>

      </div>
        <Routes>
          <Route path='/' Component={Home}></Route>
          <Route path='/user' Component={Userlisting}></Route>
          <Route path='/user/add' Component={Adduser}></Route>
          <Route path='/user/edit/:code' Component={Updateuser}></Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer className="toast-position" position='bottom-right'/>
    </div>
</Provider>  
  );
}

export default App;
