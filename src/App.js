import './App.css';
import { Route,Routes } from 'react-router-dom';
import Login from './Login';
import Reg from './Reg';
import Home from './home';
import ResetPassword from './forgot';
import Remove from './remove';
import Cycle1 from './cycle1';
import Cycle2 from './cycle2';
import Cycle3 from './cycle3';
import Cycle4 from './cycle4';
import Cycle5 from './cycle5';
import Cycle6 from './cycle6';
import Cycle7 from './cycle7';
import Cycle8 from './cycle8';
import Cycle9 from './cycle9';
import Cycle10 from './cycle10';
import Home1 from './home1';
import Acycle from './Addcycle';
import Cycleedit from './Editcycle';

function App() {
  return (
    
      <Routes>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/Reg' element={<Reg/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/forgot' element={<ResetPassword/>}></Route>
      <Route path='/remove' element={<Remove/>}></Route>
      <Route path='/cycle1' element={<Cycle1/>}></Route>
      <Route path='/cycle2' element={<Cycle2/>}></Route>
      <Route path='/cycle3' element={<Cycle3/>}></Route>
      <Route path='/cycle4' element={<Cycle4/>}></Route>
      <Route path='/cycle5' element={<Cycle5/>}></Route>
      <Route path='/cycle6' element={<Cycle6/>}></Route>
      <Route path='/cycle7' element={<Cycle7/>}></Route>
      <Route path='/cycle8' element={<Cycle8/>}></Route>
      <Route path='/cycle9' element={<Cycle9/>}></Route>
      <Route path='/cycle10' element={<Cycle10/>}></Route>
      <Route path='/home1' element={<Home1/>}></Route>
      <Route path='/addcycle' element={<Acycle/>}></Route>
      <Route path='/editcycle' element={<Cycleedit/>}></Route>
      
    </Routes>
  );
}

export default App;
