import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './Container/Home/Home'
import MenuComp from './Components/MenuComp/MenuComp/MenuComp';
import OrderComp from './Components/MenuComp/OrderComp';
import ReviewComp from './Components/MenuComp/ReviewComp';
import AccountsComp from './Components/OthersComp/AccountsComp';
import HelpComp from './Components/OthersComp/HelpComp';
import PaymentsComp from './Components/OthersComp/PaymentsComp';
import SettingsComp from './Components/OthersComp/SettingsComp';

function App() {
  return (
    <Router>
      <Routes>
     <Route path='/' element={<Home/>} />
     <Route path='/menu' element={<MenuComp/>} />
     <Route path='/order' element={<OrderComp/>} />
     <Route path='/review' element={<ReviewComp/>} />
     <Route path='/accounts' element={<AccountsComp/>} />
     <Route path='/help' element={<HelpComp/>} />
     <Route path='/payments' element={<PaymentsComp/>} />
     <Route path='/settings' element={<SettingsComp/>} />
     </Routes>
    </Router>
  );
}

export default App;
