
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import Blog from './component/Blog/Blog';
import Inventory from './component/Inventory/Inventory';
import Header from './component/Header/Header';
import NotFound from './component/NotFound/NotFound';
import Login from './component/Login/Login';
import Signup from './component/Signup/Signup';

function App() {
  return (
    <div>
      <Header></Header>
     <Routes>
       <Route path ="/" element ={<Home></Home>}></Route>
       <Route path = "/inventory" element = {<Inventory></Inventory>}></Route>
       <Route path = "/blog" element ={<Blog></Blog>} ></Route>
       <Route path ="/login" element ={<Login></Login>}></Route>
       <Route path ="/signup" element ={<Signup></Signup>}></Route>
       <Route path = "*" element = {<NotFound></NotFound>}></Route>

     </Routes>
    </div>
  );
}

export default App;
