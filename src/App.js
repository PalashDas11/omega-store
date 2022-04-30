
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import Blog from './component/Blog/Blog';
import Inventory from './component/Inventory/Inventory';
import Header from './component/Header/Header';
import NotFound from './component/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header></Header>
     <Routes>
       <Route path ="/" element ={<Home></Home>}></Route>
       <Route path = "/inventory" element = {<Inventory></Inventory>}></Route>
       <Route path = "/blog" element ={<Blog></Blog>} ></Route>
       <Route path = "*" element = {<NotFound></NotFound>}></Route>

     </Routes>
    </div>
  );
}

export default App;
