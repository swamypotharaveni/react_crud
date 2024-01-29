import logo from './logo.svg';
import './App.css';
import { BrowserRouter, HashRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import UserListing from './Components/Userlising';
import AddUser from './Components/Adduser';
import EditUser from './Components/Edituser';
import { ToastContainer,toast } from 'react-toastify';
import { Provider } from 'react-redux';

import store from './Redux/Store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
     <BrowserRouter>
     <div className='Header'>
      <Link to={'/home'}>Home</Link>
      <Link to={'/user'}>User</Link>
     </div>
     <Routes>
      <Route path='/home' element={<Home />}></Route>
      <Route path='/user' element={<UserListing />}></Route>
      <Route path='/user/add' element={<AddUser />}></Route>
      <Route path='/user/edit/:code' element={<EditUser />}></Route>
     </Routes>
    </BrowserRouter>
    <ToastContainer className="toast-position"
        position="top-center"></ToastContainer>
    </div>
    </Provider>

  );
}

export default App;
