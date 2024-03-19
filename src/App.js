import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Admin from './Admin/Admin';
import AdminEmployee from './Admin/AdminEmployee';
import Login from './Component/Login'
import DashBoard from './Admin/DashBoard';
import AdminProducts from './Admin/AdminProducts';
import Register from './Admin/Register';
import Reward from './Admin/Reward';
import Point from './Admin/Point';
import RewardEdit from './Admin/RewardEdit';
import Nav from './Employee/Nav';
import EmpolyeeHome from './Employee/EmpolyeeHome';
import ProductDetail from './Employee/ProductDetail';
import Product from './Employee/Product';
function App() {
  return (
    <div >
   
      <Router>
          {/* <Nav /> */}
        <Routes>
          
          <Route path='/' element={<Product />}/>
          <Route path='/productdetails/:id' element={<ProductDetail />} />
          <Route path='/login' element={<Login />} />
          <Route path='/admin/*' element={<Admin />}/>
          <Route path='employee' element={<AdminEmployee />} />
          <Route path='products' element={<AdminProducts />} />
          <Route path='addemployee' element={<Register />} />
          <Route path='addproducts' element={<AdminProducts />} />
          <Route path='reward' element={<Reward />}/>
          <Route path='addrewardcategory' element={<Point />} />
          <Route path='editreward/:id' element={<RewardEdit />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
