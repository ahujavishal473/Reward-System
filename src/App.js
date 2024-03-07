import AdminAddProduct from './Admin/AdminAddProduct';
import AdminEdit from './Admin/AdminEdit';
import AdminHome from './Admin/AdminHome';
import AdminProducts from './Admin/AdminProducts';
import AdminProductsEdit from './Admin/AdminProductsEdit';
import './App.css';
import Home from './Component/Home';
import Login from './Component/Login';
import Nav from './Component/Nav';
import Register from './Component/Register';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Admin from './Admin/Admin';
function App() {
  return (
    <>
    
      <Router>
        <Routes>
          <Route path='/' element={<Login />} /> 
          <Route path="/admin/*" element={<Admin />} />
          <Route path='products' element={<AdminProducts />} />
          <Route path='/home' element={<Home />}/>
          <Route path="addemployee" element={<Register />} />
          {/* <Route path='/admin/products' element={<AdminProducts />} /> */}
          {/* <Route path='/admin' element={<AdminHome />}/>
          <Route path='/admin/addemployee' element={<Register />} />
          <Route path='/admin/editemployee/:id' element={<AdminEdit />}/>
          <Route path='/admin/products' element={<AdminProducts />} />
          <Route path='/admin/addproducts' element={<AdminAddProduct />} />
          <Route path='/admin/editproduct/:id' element={<AdminProductsEdit />}/>
  ] */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
