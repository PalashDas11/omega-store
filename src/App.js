
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import Blog from './component/Blog/Blog';
import Inventory from './component/Inventory/Inventory';
import Header from './component/Header/Header';
import NotFound from './component/NotFound/NotFound';
import Login from './component/Login/Login';
import Signup from './component/Signup/Signup';
import ResetPassword from './component/ResetPassword/ResetPassword';
import RequireAuth from './component/RequireAuth/RequireAuth';
import SingleInventory from './component/SingleInventory/SingleInventory';
import { ToastContainer } from 'react-toastify';
import ManageInventories from './component/ManageInventories/ManageInventories';
import AddInventory from './component/AddInventory/AddInventory';
import Footer from './component/Footer/Footer';
import MyItem from './component/Myitem/MyItem';
import MyItemDetails from './component/MyItemDetails/MyItemDetails';

function App() {
  return (
    <div>
      <Header></Header>
     <Routes>
       <Route path ="/" element ={<Home></Home>}></Route>
       <Route path ="/home" element ={<Home></Home>}></Route>
       <Route path = "/inventory" element = {<Inventory></Inventory>}></Route>
       <Route path = "/blog" element ={<Blog></Blog>} ></Route>
       <Route path ="/login" element ={<Login></Login>}></Route>
       <Route path = "InventoryItem/:inventoryId" element ={
         <RequireAuth>
       <SingleInventory></SingleInventory>
       </RequireAuth>
       }></Route>
       <Route path="/manageItems" element ={
        <RequireAuth>
       <ManageInventories></ManageInventories>
       </RequireAuth>
       }></Route>
       <Route path="/addItem" element ={
        <RequireAuth>
       <AddInventory></AddInventory>
       </RequireAuth>
       }></Route>
       <Route path="/myItem" element ={
        <RequireAuth>
       <MyItem></MyItem>
       </RequireAuth>
       }></Route>
       <Route path="/myItem/:myItemId" element ={
        <RequireAuth>
       <MyItemDetails></MyItemDetails>
       </RequireAuth>
       }></Route>
       <Route path ="/signup" element ={<Signup></Signup>}></Route>
       <Route path ="/resetPass" element ={<ResetPassword></ResetPassword>}></Route>

       <Route path = "*" element = {<NotFound></NotFound>}></Route>
 
     </Routes>
     <ToastContainer></ToastContainer>
     <Footer></Footer>
    </div>
  );
}

export default App;
