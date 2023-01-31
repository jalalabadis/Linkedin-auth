import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Callback from './Linkdin/Callback';
import LinkdinButton from './Linkdin/LinkdinButton';
import Wellcome from './Linkdin/Wellcome';

function App() {
  return (
   < BrowserRouter>
   <Routes>
    <Route path='/' element={<div className='App'><LinkdinButton/></div>}></Route>
    <Route path='/callback' element={<Callback/>}></Route>
    <Route path='/user' element={<Wellcome/>}></Route>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
